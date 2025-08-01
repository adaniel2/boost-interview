import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import MapPage from './pages/MapPage'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState<{ title: string; completed: boolean } | null>(null)

  const fetchTodo = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    setTodo(data)
  }

  return (
    <>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/map">Map</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
                      <button className="bg-blu-500 hover:bg-blu-700 text-white font-bold py-2 px-4 rounded ml-4">
          Fetch Todo
        </button>
              {todo && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <p><strong>Title:</strong> {todo.title}</p>
                  <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
                </div>
              )}
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        } />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  )
}

export default App
