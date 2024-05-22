// Import the Express module for running a server 
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port on which the server will run
const port = 3000;

// Middleware to parse URL-encoded data from POST requests
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data from POST requests
app.use(express.json());

// Route for the root URL, serving an HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route for handling the calculation of the electricity bill
app.post('/calculate', (req, res) => {
    // Extract data from the POST request body
    const month = req.body.month;
    const units = parseInt(req.body.units);  // Parse the units as an integer
    const consumerName = req.body.consumerName;
    const address = req.body.address;
    const houseNumber = req.body.houseNumber;
    const consumerID = req.body.consumerID;

    // Initialize totalBill to 0
    let totalBill = 0;

    // Calculate the total bill based on the number of units consumed
    if (units <= 50) {
        totalBill = units * 3.50;
    } else if (units <= 150) {
        totalBill = 50 * 3.50 + (units - 50) * 4.00;
    } else if (units <= 250) {
        totalBill = 50 * 3.50 + 100 * 4.00 + (units - 150) * 5.20;
    } else {
        totalBill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + (units - 250) * 6.50;
    }

    // Send the bill details back to the client with styled HTML
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

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
