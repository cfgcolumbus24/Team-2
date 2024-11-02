const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const axios = require('axios');
const OpenAI = require('openai');
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
app.post('/api/openai', async (req, res) => {
    const { type, prompt } = req.body; // Retrieve 'type' and 'prompt' from the request body
    let results = []; // Initialize an empty array to store CSV data
    let filePath;

    // Determine which CSV file to read based on the 'type' parameter
    if (type === 'financial') {
        filePath = 'src/netcare_financial_data.csv';
    } else if (type === 'patient') {
        filePath = 'src/dummy_patient_data.csv';
    } else {
        return res.status(400).send("Invalid type parameter. Choose either 'financial' or 'patient'.");
    }

    // Function to read CSV data and return it as a JSON string
    const readCSVData = () => {
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(JSON.stringify(results)))
                .on('error', (error) => reject(error));
        });
    };

    try {
        // Wait for CSV data to be fully read
        const data = await readCSVData();

        // Set up the request to OpenAI's API
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: data + prompt }],
            model: 'gpt-4o',
        });

        // Send the OpenAI response back to the client
        res.json({ "response": chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error calling OpenAI API or reading CSV data");
    }
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

