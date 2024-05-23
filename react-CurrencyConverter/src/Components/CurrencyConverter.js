import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css'; // Import the CSS file for styling

// functional compontent 
const CurrencyConverter = () => {
  // State hooks for managing component state
  const [amount, setAmount] = useState(1); // Amount to convert
  const [fromCurrency, setFromCurrency] = useState('USD'); // Source currency
  const [toCurrency, setToCurrency] = useState('EUR'); // Target currency
  const [exchangeRate, setExchangeRate] = useState(); // Current exchange rate
  const [convertedAmount, setConvertedAmount] = useState(); // Result of conversion

   // Hardcoded exchange rates
   const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, INR: 74 },
    EUR: { USD: 1.18, EUR: 1, INR: 87 },
    INR: { USD: 0.013, EUR: 0.011, INR: 1 }
  };

  // useEffect is a hook that lets you perform side effects in function components.
  // useEffect to fetch the exchange rate when fromCurrency or toCurrency changes

   // useEffect to update the converted amount when fromCurrency, toCurrency, or amount changes
   useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [fromCurrency, toCurrency, amount]); // dependency array 
  // dependency array ensures that If fromCurrency, toCurrency, or amount is updated, the function passed to useEffect will be executed.


  // handler function update the input state when the input value changes 

  // Handler for amount input change
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Handler for source currency selection change
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  // Handler for target currency selection change
  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  // JSX is a syntax extension for JavaScript that looks similar to XML or HTML. 
  //It is used with React to describe what the UI should look like.

  return (
    <div className="currency-converter">
      <h2>Currency Converter </h2>
      <div className="input-container">
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="input-container">
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div className="input-container">
        <label>To Currency:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <div className="result-container">
        <p>Converted Amount: {convertedAmount} {toCurrency}</p>
      </div>
    </div>
  );
};

// export default: Exports the Result component as the default export from this module, making it available for import in other files.
export default CurrencyConverter;




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