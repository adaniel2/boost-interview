import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX

function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN
    
    const map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v9',
      projection: 'globe',
      zoom: 1,
      center: [30, 15]
    })

    map.addControl(new mapboxgl.NavigationControl())
    map.scrollZoom.disable()

    map.on('style.load', () => {
      map.setFog({})
    })

    // Spinning globe functionality
    const secondsPerRevolution = 240
    const maxSpinZoom = 5
    const slowSpinZoom = 3
    let userInteracting = false
    const spinEnabled = true

    function spinGlobe() {
      const zoom = map.getZoom()
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom)
          distancePerSecond *= zoomDif
        }
        const center = map.getCenter()
        center.lng -= distancePerSecond
        map.easeTo({ center, duration: 1000, easing: (n) => n })
      }
    }

    map.on('mousedown', () => {
      userInteracting = true
    })
    map.on('dragstart', () => {
      userInteracting = true
    })

    map.on('moveend', () => {
      spinGlobe()
    })

    spinGlobe()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <>
      <div 
        ref={mapContainer} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />

    </>
  )
}

export default MapPage 