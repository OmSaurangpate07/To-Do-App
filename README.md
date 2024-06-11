# To-Do-App
Approach and Methodology:
I used React as a frontend technology and node.js, express.js as a backend technologies with mongoDB as a database for this web application.
**Folder Structure:**
projectbackend - 
  - models
      - Todo.js
  - controllers
      - todo.js
  - routes
      - todo.js
  - app.js
  - node_modules
  - package.json

projectfrontend
  - node_modules
  - public
  - src
      - App.js
      - App.css
      - index.js
      - index.css
      - Todo.js
      - Todo.css
      - reportWebVitals.js
   - package.json

**Project Backend -**
1. Models folder contains all the database models which is required.
2. Controllers folder contains todo.js file which has functions written for CRUD opperation for create, read, update and delete route.
3. Routes folder contains get, post, put, and delete routes for todo app
4. app.js file is the main file of project which contains mongodb database connection, middlewares (CORS, body-parser) and express server.

**Project Frontend -**
1. In src folder App.js is the entry point of any react app.
2. In src folder Todo.js file contains the frontend logic of the todo app and contains the functions which helps to perform CRUD opperation.
3. Todo.css file contains the styling part of the application.
This todo app is capable to perform create, read, update and delete opperations efficienty.


**Project Requirements and Setup :**
**Project Requirements -** 
1. Install Node
2. Install MongoDB Compass
3. Install Visual Studio Code

**Setup -**
1. Open project folder in Visual Studio Code
2. Open terminal in Visual Studio Code
3. Run the followind commad to install all dependencies and to start backend in termial:
   ~ cd projectbackend
   ~ npm install
   ~ node app.js
4. Run the following command to start frontend:
   ~ cd ..
   ~ cd projectfrontend
   ~ npm install
   ~ npm start
5. Open any browser and write _http://localhost:3000/_ in search bar to use todo app


**Descriptions of Libraries and Tools Used :**
1. Node.js -  Node is a JavaScript runtime built on Chrome's V8 JavaScript engine which is used to run backend server using express.
2. Express.js - Express.js is a backend framework for node which is used to set up the server, handle routing, and manage middleware.
3. MongoDB - MongoDb is a no sql database which is used to store the data.
4. CORS - Cors is a node module which is use to enable cross origine resource sharing with various options.
5. Body-Parser - body parser is a middleware which is use to parses incoming request bodies in a middleware to handle JSON.
6. React - React is a library which is use to design user interfaces.
7. Axios - Axios is a promise-based HTTP client for the browser and Node.js which is use to make HTTP requests from the React frontend to the backend API for performing CRUD operations.

![Screenshot 2024-06-12 002005](https://github.com/OmSaurangpate07/To-Do-App/assets/129660121/8ad0c506-5671-4258-918a-4259e8255793)
