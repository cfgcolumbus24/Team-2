import Link from 'next/link';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

export default function Clinical({ initialPatients }) {
  const [filteredPatients, setFilteredPatients] = useState(initialPatients);
  const [search, setSearch] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [queryResponse, setQueryResponse] = useState('');

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
      initialPatients.filter((patient) =>
        patient.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!criteria || Object.values(patient).some(value => value.toString().toLowerCase() === criteria.toLowerCase()))
      )
    );
  };

  const uniqueCriteria = Array.from(new Set(initialPatients.flatMap(patient => [patient.Diagnosis, patient.Severity])));

  const data = {
    labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', '1 day ago', 'Today'],
    datasets: [
      { label: 'Patients Seen', data: [5, 6, 8, 7, 4, 3, 9], borderColor: 'rgb(75, 192, 192)', tension: 0.1 },
    ],
  };

  const handleQuery = async (question) => {
    try {
      setQueryResponse("You have had a patient with a similar condition. Please refer to the John Deo patient's profile for more information.");
    } catch (error) {
      console.error("Failed to fetch query response:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="graph-section">
        <h1>Clinician Dashboard</h1>
        <div className="graph-container">
          <Line data={data} />
        </div>
        <p className="last-updated">Last Updated: {lastUpdated.toLocaleString()}</p>
      </div>
      <div className="patients-section">
        <input 
          type="text" 
          placeholder="Search by patient name" 
          value={search} 
          onChange={handleSearch} 
          className="search-bar" 
        />
        <select onChange={handleFilterChange} value={filterCriteria} className="filter-dropdown">
          <option value="">Filter by Diagnosis or Severity</option>
          {uniqueCriteria.map((criteria, index) => (
            <option key={index} value={criteria}>{criteria}</option>
          ))}
        </select>
        <h2>Patients List</h2>
        <ul className="patients-list">
          {filteredPatients.map((patient, index) => (
            <li key={index} className="patient-item">
              <Link href={`/patient/${index}`}>
                {patient.Name} - Age: {patient.Age} - Diagnosis: {patient.Diagnosis}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="llm-query">
        <h2>Natural Language Query</h2>
        <input
          type="text"
          placeholder="Ask about patient data"
          onKeyDown={(e) => e.key === 'Enter' && handleQuery(e.target.value)}
        />
        <p>{queryResponse}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('');
    const data = await response.json();
    return { props: { initialPatients: data } };
  } catch (error) {
    console.error("Failed to fetch patient data:", error);
    return { props: { initialPatients: [] } };
  }
}
