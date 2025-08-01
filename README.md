# Frontend Developer Interview Challenge

Welcome to the Boost Frontend Developer Interview! This is a practical coding challenge designed to assess your problem-solving skills, ability to work with documentation, and technical proficiency.

## 🎯 Objective

You have been given a partially working React + Vite application that needs to be completed and made production-ready. Your task is to identify and fix issues, implement missing features, and containerize the application.

## 🚀 Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Try to start the development server with `npm run dev`
4. Navigate to the application and explore what's working and what's not

## 📋 Tasks to Complete

### 1. Fix Installation Issues
- You may encounter dependency issues when running `npm install`
- Investigate and resolve any missing packages
- Ensure the application can start successfully

### 2. Fix Styling Issues
- Make sure Tailwind CSS is properly installed and configured
- The application should use Tailwind classes for styling
- Refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) if needed

### 3. Map Navigation
- The map page (`/map`) is missing a way to navigate back to the home page
- Add a button or link that allows users to return to the home page from the map
- Make sure it's visible and accessible

### 4. Fix Broken Button Functionality
- The "Fetch Todo" button on the home page doesn't work when clicked
- Investigate why clicking the button has no effect
- The button should fetch data from a public API and display it below
- *Hint: Check the button's event handlers*

### 5. API Integration Issues
- The map component may not be loading properly
- Investigate any API token or configuration issues
- The map should display a globe view with navigation controls
- *Hint: Check environment variables and their naming conventions*

### 6. Dockerization
- Create a `Dockerfile` to containerize the application
- The container should:
  - Build the React application for production
  - Serve the built files using a web server (e.g., nginx)
  - Expose the application on port 80
  - Be ready for deployment
- Test that the Docker container works by running it locally

## 🎯 Expected Functionality

When complete, the application should:
- ✅ Start with `npm run dev` without errors
- ✅ Display a home page with a working counter and "Fetch Todo" button
- ✅ Show todo data when the fetch button is clicked
- ✅ Have a `/map` route that displays a Mapbox globe
- ✅ Allow navigation between home and map pages
- ✅ Build successfully with `npm run build`
- ✅ Run in a Docker container and be accessible via browser

## 🔧 Available Routes

- `/` - Home page with React counter and API fetch functionality
- `/map` - Interactive Mapbox globe view

## 📚 Resources

You may use any documentation, Stack Overflow, or other resources you would normally use in your day-to-day work. This includes:
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Mapbox GL JS Documentation](https://docs.mapbox.com/mapbox-gl-js/)
- [Docker Documentation](https://docs.docker.com/)

## ⏱️ Time Expectation

This challenge is designed to take approximately 30-45 minutes. Focus on getting the core functionality working rather than perfecting every detail.

## 🤔 Need Help?

If you get completely stuck on any issue, don't hesitate to ask for clarification or hints. We're more interested in your problem-solving approach than whether you can solve everything independently.

## 📝 Submission

When you're done:
1. Ensure the application runs locally with `npm run dev`
2. Verify the Docker container builds and runs successfully
3. Walk through the working application to demonstrate the functionality

Good luck! 🚀
