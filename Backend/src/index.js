const express = require('express');
const fs = require('fs');
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

// Log whether we're in EC2 or local
if (isEC2) {
    console.log("Running on an EC2 instance");
} else {
    console.log("Running locally");
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

