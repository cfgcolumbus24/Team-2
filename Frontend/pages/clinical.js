import Link from 'next/link';
import { Line } from 'react-chartjs-2';
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
        borderColor: '#4F46E5',
        tension: 0.4,
      },
    ],
  };

  const handleQuery = async (question) => {
    try {
      setQueryResponse(
        "You have had a patient with a similar condition. Please refer to the John Doe patient's profile for more information."
      );
    } catch (error) {
      console.error('Failed to fetch query response:', error);
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

  return (
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
