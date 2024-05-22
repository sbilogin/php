import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css'; // Import the CSS file for styling

const CurrencyConverter = () => {
  // State hooks for managing component state
  const [amount, setAmount] = useState(1); // Amount to convert
  const [fromCurrency, setFromCurrency] = useState('USD'); // Source currency
  const [toCurrency, setToCurrency] = useState('EUR'); // Target currency
  const [exchangeRate, setExchangeRate] = useState(); // Current exchange rate
  const [convertedAmount, setConvertedAmount] = useState(); // Result of conversion

  // useEffect to fetch the exchange rate when fromCurrency or toCurrency changes
  useEffect(() => {
    // Asynchronous function to fetch exchange rates from an API
    const fetchExchangeRate = async () => {
      try {
        // Fetch exchange rate data from the API
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        // Update the exchange rate state
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]); // Dependencies: fromCurrency, toCurrency

  // useEffect to update the converted amount when exchange rate or amount changes
  useEffect(() => {
    if (exchangeRate) {
      // Calculate and set the converted amount
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [exchangeRate, amount]); // Dependencies: exchangeRate, amount

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

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
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

export default CurrencyConverter;
