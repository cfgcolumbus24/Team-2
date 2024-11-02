const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
