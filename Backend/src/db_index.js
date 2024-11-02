const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://a:a@net2connect.e1egw.mongodb.net/?retryWrites=true&w=majority&appName=net2connect',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose Schemas and Models

// Patient schema based on CSV data structure
const patientSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  age: Number,
  ethnicity: String,
  severity: String,
  frequencyOfVisits: Number,
  diagnosis: String,
  procedure: String,
  primaryDoctor: String,
  treatmentPlan: String,
  medication: String,
  emergencyContact: String,
});

// Financial schema based on CSV data structure
const financialSchema = new mongoose.Schema({
  revenueSource: String,
  revenue2020: Number,
  revenue2021: Number,
  revenue2022: Number,
  expenseCategory: String,
  expense2020: Number,
  expense2021: Number,
  expense2022: Number,
});

const Patient = mongoose.model('Patient', patientSchema);
const Financial = mongoose.model('Financial', financialSchema);

// Function to load CSV data into MongoDB
async function loadCSVData() {
  // Clear existing data to prevent duplicates
  await Patient.deleteMany({});
  await Financial.deleteMany({});

  const loadPatients = () => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'dummy_patient_data.csv'))
      .pipe(csv())
      .on('data', (data) => {
        results.push({
          name: data['Name'],
          dob: new Date(data['DOB']),
          age: Number(data['Age']),
          ethnicity: data['Ethnicity'],
          severity: data['Severity'],
          frequencyOfVisits: Number(data['Frequency of visits']),
          diagnosis: data['Diagnosis'],
          procedure: data['Procedure'],
          primaryDoctor: data['Primary doctor/physician'],
          treatmentPlan: data['Treatment plan'],
          medication: data['Medication'],
          emergencyContact: data['Emergency contact'],
        });
      })
      .on('end', async () => {
        // Insert data into MongoDB
        try {
          await Patient.insertMany(results);
          console.log('Patient data loaded into MongoDB');
        } catch (error) {
          console.error('Error inserting patient data:', error);
        }
      });
  };

  const loadFinancials = () => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'netcare_financial_data.csv'))
      .pipe(csv())
      .on('data', (data) => {
        results.push({
          revenueSource: data['Revenue Source'],
          revenue2020: Number(data['2020']),
          revenue2021: Number(data['2021']),
          revenue2022: Number(data['2022']),
          expenseCategory: data['Expense Category'],
          expense2020: Number(data['2020 Expenses']),
          expense2021: Number(data['2021 Expenses']),
          expense2022: Number(data['2022 Expenses']),
        });
      })
      .on('end', async () => {
        // Insert data into MongoDB
        try {
          await Financial.insertMany(results);
          console.log('Financial data loaded into MongoDB');
        } catch (error) {
          console.error('Error inserting financial data:', error);
        }
      });
  };

  loadPatients();
  loadFinancials();
}

// Uncomment the line below to load data when server starts
loadCSVData();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Healthcare Data API' });
});

// Endpoint to retrieve patient data
app.get('/data/patient', async (req, res) => {
  try {
    const patients = await Patient.find().lean();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patient data' });
  }
});

// Endpoint to retrieve financial data
app.get('/data/financial', async (req, res) => {
  try {
    const financials = await Financial.find().lean();
    res.json(financials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch financial data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
