const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const app = express();
const port = process.env.PORT || 3000; // Use port from env or default to 3000

// Check if the app is running on an EC2 instance
const isEC2 = process.env.PORT !== null ||  process.env.EC2_INSTANCE === 'true' || process.env.NODE_ENV === 'production';

app.get('/', (req, res) => {

res.json({"hi":"Hello"})

});


app.get('/data/patient', (req, res) => {
    const results = [];

    // Read and parse the CSV file
    fs.createReadStream('src/dummy_patient_data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Send the parsed JSON as the response
            res.json(results);
        });
});

// Endpoint to fetch all financial data from JSON
app.get('/data/financial', (req, res) => {
    const results = [];
    // Read and parse the CSV file
    fs.createReadStream('src/netcare_financial_data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Send the parsed JSON as the response
            res.json(results);
        });
});
// Endpoint to fetch revenue data
app.get('/data/financial/revenue', (req, res) => {
    const results = [];

    fs.createReadStream(path.join(__dirname, 'netcare_financial_data.csv'))
        .pipe(csv())
        .on('data', (data) => {
            if (data["Revenue Source"]) {
                results.push({
                    source: data["Revenue Source"],
                    "2020": data["2020"],
                    "2021": data["2021"],
                    "2022": data["2022"]
                });
            }
        })
        .on('end', () => {
            res.json(results);
        })
        .on('error', (err) => {
            console.error('Error reading CSV file:', err);
            res.status(500).json({ error: 'Error reading financial data' });
        });
});

// Endpoint to fetch expense data
app.get('/data/financial/expenses', (req, res) => {
    const results = [];

    fs.createReadStream(path.join(__dirname, 'netcare_financial_data.csv'))
        .pipe(csv())
        .on('data', (data) => {
            if (data["Expense Category"]) {
                results.push({
                    category: data["Expense Category"],
                    "2020 Expenses": data["2020 Expenses"],
                    "2021 Expenses": data["2021 Expenses"],
                    "2022 Expenses": data["2022 Expenses"]
                });
            }
        })
        .on('end', () => {
            res.json(results);
        })
        .on('error', (err) => {
            console.error('Error reading CSV file:', err);
            res.status(500).json({ error: 'Error reading financial data' });
        });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});


// Log whether we're in EC2 or local
if (isEC2) {
    console.log("Running on an EC2 instance");
} else {
    console.log("Running locally");
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

