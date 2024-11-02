import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import Header from './dashboard/header';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { useState } from 'react';
// import '../styles/Clinical.css'; // Assuming global styles are imported in _app.js

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Clinical({ initialPatients }) {
  const [filteredPatients, setFilteredPatients] = useState(initialPatients);
  const [search, setSearch] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [queryResponse, setQueryResponse] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;

  const handleSearch = (event) => {
    setSearch(event.target.value);
    filterPatients(event.target.value, filterCriteria);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
    filterPatients(search, event.target.value);
  };

  const filterPatients = (searchTerm, criteria) => {
    setFilteredPatients(
      initialPatients.filter(
        (patient) =>
          patient.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!criteria ||
            Object.values(patient).some(
              (value) =>
                value.toString().toLowerCase() === criteria.toLowerCase()
            ))
      )
    );
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const uniqueCriteria = Array.from(
    new Set(
      initialPatients.flatMap((patient) => [
        patient.Diagnosis,
        patient.Severity,
      ])
    )
  );

  const data = {
    labels: [
      '6 days ago',
      '5 days ago',
      '4 days ago',
      '3 days ago',
      '2 days ago',
      '1 day ago',
      'Today',
    ],
    datasets: [
      {
        label: 'Patients Seen',
        data: [5, 6, 8, 7, 4, 3, 9],
        borderColor: '#63AFF7',
        tension: 0.4,
      },
    ],
  };

  const handleQuery = async (question) => {
    try {
      const response = await fetch(
        'http://ec2-3-91-148-179.compute-1.amazonaws.com:3000/api/openai',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'patient',
            "prompt": question
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      // Format the response to place each numbered item on a new line
    const formattedResponse = data.response.replace(/(\d+\.)/g, '\n$1');
      setQueryResponse(formattedResponse || "No relevant data found.");
    } catch (error) {
      console.error("Failed to fetch query response:", error);
      setQueryResponse("Error retrieving response. Please try again.");
    }
  };
  
  
  


  // Pagination calculation
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Our Impact', 14, 20);
    doc.setFontSize(12);
    doc.text('Demographics', 14, 30);

    // Demographics Table
    doc.autoTable({
      startY: 40,
      head: [['Age', 'Number of individuals served']],
      body: [
        ['<18', '100'],
        ['18-24', '750'],
        ['25-34', '1100'],
        ['35-44', '500'],
        ['45-54', '250'],
        ['55-64', '500'],
        ['65+', '300'],
        ['Unknown', '50'],
      ],
    });

    // Additional info
    doc.setFontSize(16);
    doc.text('8/10 refer themselves or are brought in by a relative or friend.', 14, doc.autoTable.previous.finalY + 20);
    doc.text('52% identify as male.', 14, doc.autoTable.previous.finalY + 30);

    // Pie Chart Placeholder (you can generate and add it as an image if needed)
    doc.setFontSize(14);
    doc.text('Ethnicity Breakdown', 14, doc.autoTable.previous.finalY + 50);

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 60,
      head: [['Ethnicity', 'Percentage']],
      body: [
        ['Black/African-American', '43%'],
        ['White/Caucasian', '45%'],
        ['Hispanic/Latin American', '5%'],
        ['Two or more races', '4%'],
        ['Asian', '1%'],
        ['Other', '2%'],
      ],
    });

    doc.save('Impact_Report.pdf');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
    <div className="dashboardContainer">
   

      <div className="mainContent">
        <div className="graphSection">
          <h1>Clinician Dashboard</h1>
          <h3>Patients Seen Over the Last 7 Days</h3>
          <div className="graphContainer">
            <Line data={data} />
          </div>
          <p className="lastUpdated">
            Last Updated: {lastUpdated.toLocaleString()}
          </p>
          <button onClick={generatePDF} className="reportButton">
              Generate Report
            </button>
        </div>

        <div className="patientsSection">
        <div className="titlepatient"> 
        <h3>Patient Data</h3>

        </div>
          <div className="searchFilter">
            <input
              type="text"
              placeholder="Search by patient name"
              value={search}
              onChange={handleSearch}
              className="searchBar"
            />
            <select
              onChange={handleFilterChange}
              value={filterCriteria}
              className="filterDropdown"
            >
              <option value="">Filter by Diagnosis or Severity</option>
              {uniqueCriteria.map((criteria, index) => (
                <option key={index} value={criteria}>
                  {criteria}
                </option>
              ))}
            </select>
          </div>
          <h2>Patients List</h2>
          <ul className="patientsList">
            {currentPatients.map((patient, index) => (
              <li key={index} className="patientItem">
                <Link href={`/patient/${index}`} legacyBehavior>
                  <a className="patientLink">
                    {patient.Name} - Age: {patient.Age} - Diagnosis: {patient.Diagnosis}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pagination">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="paginationButton"
            >
              Previous
            </button>
            {/* big space */}
            <span> </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <span> </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="paginationButton"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="llmQuery">
        <h2>Natural Language Query</h2>
        <input
          type="text"
          placeholder="Ask about patient data"
          onKeyDown={(e) => e.key === 'Enter' && handleQuery(e.target.value)}
          className="queryInput"
        />
        <p className="queryResponse">{queryResponse}</p>
      </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(
      ''
    );
    const data = await response.json();
    return { props: { initialPatients: data } };
  } catch (error) {
    console.error('Failed to fetch patient data:', error);
    return { props: { initialPatients: [] } };
  }
}
