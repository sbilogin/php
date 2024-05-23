import React, { useState } from 'react';
import './FormC.css'; // Import the CSS file

const FormC = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    prn: '',
    sdamESE: '',
    oopESE: '',
    iotESE: '',
    dsaESE: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> {/* Apply the CSS class here */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        PRN:
        <input type="text" name="prn" value={formData.prn} onChange={handleChange} />
      </label>
      <label>
        SDAM ESE:
        <input type="number" name="sdamESE" value={formData.sdamESE} onChange={handleChange} />
      </label>

     

      <label>
        OOP ESE:
        <input type="number" name="oopESE" value={formData.oopESE} onChange={handleChange} />
      </label>

      <label>
        IOT ESE:
        <input type="number" name="iotESE" value={formData.iotESE} onChange={handleChange} />
      </label>

     
      <label>
        DSA ESE:
        <input type="number" name="dsaESE" value={formData.dsaESE} onChange={handleChange} />
      </label>
      {/* Rest of your form */}
      <button type="submit">Fetch</button>
    </form>
  );
};

export default FormC;






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