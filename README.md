# Team-2-dev: Predictive Analysis and Patient Management Web App

## Overview

Team-2-dev is a responsive web application designed to streamline patient management and support clinicians with data-driven insights. Built as an MVP for a hackathon, this app features a main dashboard for patient data analysis and a specialized clinician dashboard to assist healthcare professionals in tracking, filtering, and querying patient data.

Key features include:
- **Patient Search**: A clinician-specific search tool for locating patients quickly.
- **Data Visualization**: Interactive charts for tracking patients seen over time and other critical metrics.
- **Dynamic Filtering**: Filter patients based on previous diagnoses and case studies for targeted analysis.
- **Natural Language Querying**: A natural language query section powered by OpenAI's API, allowing clinicians to retrieve insights using conversational language.

## Features

### Main Dashboard
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Interactive Charts**: Visualize patient data trends over time, such as total patients seen, demographics, and more.

### Clinician Dashboard
- **Patient Search**: Quickly search for patients within the system.
- **Patient Data Filters**: Filter by diagnoses, case studies, and other parameters for tailored insights.
- **Additional Data Analytics**: Various charts to analyze patient data, including case trends, recovery rates, and diagnostics.
- **Natural Language Querying**: Integrate OpenAI's API to answer clinician-specific questions about patient data.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: To run the Next.js application.
- **npm** or **yarn**: For package management.
- **OpenAI API Key**: For enabling the natural language query feature.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Team-2-dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Team-2-dev
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. Create a `.env.local` file in the root of the project.
2. Add the following variables:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
   ```

### Running the Application

To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser to access the app.

### Building for Production

To create an optimized production build, run:
```bash
npm run build
# or
yarn build
```
Then start the application:
```bash
npm start
# or
yarn start
```

## Usage

### Main Dashboard

The main dashboard provides a responsive interface with charts displaying key patient statistics, including:
- **Patients Seen Over Time**: A line chart showing the number of patients seen.
- **Patient Demographics**: Demographic breakdowns of patients.

### Clinician Dashboard

The clinician dashboard includes the following:
- **Patient Search**: Use keywords to quickly locate a patient's records.
- **Dynamic Filters**: Filter patients based on specific diagnoses or case studies.
- **Natural Language Query**: Input queries in natural language to analyze data (e.g., “Show me all patients diagnosed with diabetes”).

## Technology Stack

- **Frontend**: Next.js, React, CSS
- **Backend**: Node.js, Express.js
- **Database**: (e.g., MongoDB) [To be determined based on requirements]
- **API Integration**: OpenAI API for natural language querying

## Future Enhancements

- **Additional Visualizations**: Expand chart options for deeper analysis.
- **User Authentication**: Secure access for clinicians.
- **Role-Based Access**: Differentiate access levels for clinicians and administrators.
- **AI-Driven Insights**: Integrate predictive analysis for identifying trends in patient health data.

## Contributors

- **@1** - UI/UX, Next.js Development, Predictive Analysis Features
- **@2** - Backend API, Database Integration
- **@3** - Data Visualization, Chart Implementation
- **@4** - Natural Language Query Integration
- **@5** - Natural Language Query Integration
- **@6** - Natural Language Query Integration

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to the hackathon organizers and OpenAI for API access.
