import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Clinical() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    async function fetchPatients() {
      const response = await fetch('/patients.json');
      const data = await response.json();
      setPatients(data);
      setFilteredPatients(data);
    }
    fetchPatients();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFilteredPatients(
      patients.filter((patient) =>
        patient.Name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const data = {
    labels: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', '1 day ago', 'Today'],
    datasets: [
      {
        label: 'Patients Seen',
        data: [5, 6, 8, 7, 4, 3, 9], // Example data; replace with real data logic
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
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
          placeholder="Search for a patient"
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <h2>Patients List</h2>
        <ul className="patients-list">
          {filteredPatients.map((patient, index) => (
            <li key={index} className="patient-item">
              <Link href={`/patient/${index}`}>
                {patient.Name} - Age: {patient.Age} - Severity: {patient.Severity}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
