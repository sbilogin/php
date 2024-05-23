// express: Imports the Express library to create a web server.
const express = require('express');
const app = express();
const port = 3000;

// express.urlencoded({ extended: true }): Middleware to parse URL-encoded data (e.g., form submissions).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Defines a GET route for the root URL (/).
app.get('/', (req, res) => {

    // Sends an HTML file (index.html) located in the same directory as this script to the client.
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const month = req.body.month;
    const units = parseInt(req.body.units);
    const consumerName = req.body.consumerName;
    const address = req.body.address;
    const houseNumber = req.body.houseNumber;
    const consumerID = req.body.consumerID;

    let totalBill = 0;

    if (units <= 50) {
        totalBill = units * 3.50;
    } else if (units <= 150) {
        totalBill = 50 * 3.50 + (units - 50) * 4.00;
    } else if (units <= 250) {
        totalBill = 50 * 3.50 + 100 * 4.00 + (units - 150) * 5.20;
    } else {
        totalBill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + (units - 250) * 6.50;
    }

    // Send the bill details with styled HTML
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Electricity Bill</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }

                .bill-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 300px;
                    text-align: center;
                }

                h2 {
                    color: #4caf50;
                }

                p {
                    margin: 8px 0;
                }
            </style>
        </head>
        <body>
            <div class="bill-container">
                <h2>Electricity Bill Details</h2>
                <p>Month: ${month}</p>
                <p>Consumer Name: ${consumerName}</p>
                <p>Address: ${address}</p>
                <p>House Number: ${houseNumber}</p>
                <p>Consumer ID: ${consumerID}</p>
                <p>Total Bill: Rs. ${totalBill.toFixed(2)}</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



/**
 * 
 * 1. What is Node.js? js v22.
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code 
outside of a web browser. 
It allows developers to build scalable and high-performance applications, particularly on the server-side.



/* React 18. 
React is a JavaScript library for building user interfaces, particularly single-page applications. 
It allows developers to create reusable UI components.

Hooks are functions that manages React state and lifecycle features from function components.
- useState
useState is a hook that allows you to add React state to function components.

It returns an array with two elements: the current state and a function to update it.
Syntax: const [state, setState] = useState(initialState);

- useEffect
useEffect is a hook that lets you perform side effects in function components.

Key Concepts
Components
Components are the building blocks of a React application.
They are JavaScript functions or classes that optionally accept inputs (called "props") and return React elements describing what should appear on the screen.
Components can be functional (using functions) or class-based (using ES6 classes).

State is a built-in object used to contain data or information about the component that can change over time.
State changes cause the component to re-render.

Common lifecycle methods:

componentDidMount: Called once after the initial render.
componentDidUpdate: Called after updates.
componentWillUnmount: Called before the component is destroyed.

React Router is a standard library for routing in React applications.
It enables the navigation among views of various components in a React Application,
allows changing the browser URL, and keeps UI in sync with the URL.

What is the Virtual DOM?
The Virtual DOM is a concept implemented by libraries like React.
 It is a lightweight copy of the actual DOM, kept in memory and 
 synced with the real DOM by a library such as ReactDOM.

 npx create-react-app my-app

 node_modules
Purpose: This directory contains all the project's dependencies installed via npm. 

index.js: The entry point of your React application. 
This file is responsible for rendering the root component (App) into the DOM.

App.js: A sample root component provided by Create React App. You can modify or replace this with your own components.
App.css: Styling for the App component.
index.css: Global styles for your application.
App.test.js: A sample test file for the App component.
logo.svg: A sample logo used in the App component.
reportWebVitals.js: Used to measure performance in your app.
setupTests.js: Configuration for setting up tests with Jest.

package.json
Purpose: Contains metadata about the project, including dependencies, scripts, and other configurations.
Key Sections:
"name": The name of your project.
"version": The version of your project.
"scripts": Script commands that can be run using npm run <script-name>. For example, npm start to start the development server.
"dependencies": Lists the npm packages required for your application to run.
"devDependencies": Lists the npm packages required for development (e.g., testing libraries).


*/ 
 