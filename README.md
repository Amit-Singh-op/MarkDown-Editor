# Markdown Editor Application

This repository contains a full stack application with a frontend built in React and a backend built in Node.js.

## Table of Contents

- [Project Overview](#project-overview)
- [Frontend Setup and Running (React)](#frontend-setup-and-running-react)
- [Backend Setup and Running (Node.js/Express)](#backend-setup-and-running-nodejs-express)
- [Additional Notes](#additional-notes)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

This project consists of two main parts:

1. **Frontend:** A React application to convert text to html format.
2. **Backend:** A Node.js application using Express for server-side logic.

## Frontend Setup and Running (React)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Amit-Singh-op/MarkDown-Editor
   ```

2. **Navigate to the Frontend Directory:**

   ```bash
   cd {your_folder_name}/frontend
   ```

3. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. If not, install it from the official website.

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   The React app will be running on [http://localhost:3000](http://localhost:3000). Open this URL in your web browser to view the application.

5. **Build for Production:**

   To create a production build of the React app, run:

   ```bash
   npm run build
   ```

   The build artifacts will be available in the `build` directory.

## Backend Setup and Running (Node.js/Express)

1. **Navigate to the Backend Directory:**

   ```bash
   cd {your_folder_name}/backend
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/).

   ```bash
   npm install
   ```

3. **Start the Server:**

   ```bash
   npm start
   ```

   The backend server will be running on [http://localhost:5000](http://localhost:5000). The API endpoints can be accessed from this URL.

## Additional Notes

- **Frontend Testing:** To run tests for the frontend, use:

  ```bash
  npm test
  ```

- **Backend Testing:** To run tests for the backend, use:

  ```bash
  npm test
  ```

- **Cross-Origin Requests:** If the frontend and backend are running on different ports, handle CORS (Cross-Origin Resource Sharing) in the backend configuration. You may need to use the `cors` middleware:

  ```bash
  npm install cors
  ```

  Then, add the following to your `backend/index.js` or equivalent:

  ```javascript
  const cors = require("cors");
  app.use(cors());
  ```

## Troubleshooting

- **Both Servers Not Running:** Ensure both the frontend and backend servers are running simultaneously. The frontend should be on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

- **CORS Issues:** Verify that the backend is configured to accept requests from the frontend origin. Check that `cors` is properly set up.

- **MongoDB Connection:** Verify that MongoDB is running and accessible. Check the `MONGODB_URI` in the `.env` file. You can use MongoDB Compass or similar tools to confirm the connection.
