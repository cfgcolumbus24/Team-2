import { useRouter } from 'next/router';

export default function PatientDetails({ patient }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!patient) return <p>Patient not found.</p>;

  return (
  
    <div className="patient-details-container">
           {/* back button top left */}
    <button onClick={() => router.back()}>Back</button>
      <h1>Patient Data</h1>
      <p><strong>Name of Patient:</strong> {patient.Name}</p>

      <div className="card-container">
        {/* Vital signs and key metrics */}
        <div className="card">
          <h3>Blood Sugar</h3>
          <p className="value">{patient.Severity === 'Moderate' ? '80 mg/dL' : 'N/A'}</p>
          <span className="status normal">Normal</span>
          <div className="chart-placeholder"></div>
        </div>

        <div className="card">
          <h3>Heart Rate</h3>
          <p className="value">98 bpm</p>
          <span className="status normal">Normal</span>
          <div className="chart-placeholder"></div>
        </div>

        <div className="card">
          <h3>Blood Pressure</h3>
          <p className="value">102 / 72 mmHg</p>
          <span className="status normal">Normal</span>
          <div className="chart-placeholder"></div>
        </div>

        <div className="card">
          <h3>Body Temperature</h3>
          <p className="value">99 °F</p>
          <span className="status normal">Normal</span>
          <div className="chart-placeholder"></div>
        </div>

        <div className="card">
          <h3>Respiratory Rate</h3>
          <p className="value">15 rpm</p>
          <span className="status normal">Normal</span>
          <div className="chart-placeholder"></div>
        </div>

        {/* Additional patient information */}
        <div className="card">
          <h3>DOB</h3>
          <p className="value">{patient.DOB}</p>
        </div>

        <div className="card">
          <h3>Age</h3>
          <p className="value">{patient.Age} years</p>
        </div>

        <div className="card">
          <h3>Ethnicity</h3>
          <p className="value">{patient.Ethnicity}</p>
        </div>

        <div className="card">
          <h3>Severity</h3>
          <p className="value">{patient.Severity}</p>
        </div>

        <div className="card">
          <h3>Frequency of Visits</h3>
          <p className="value">{patient['Frequency of visits']} times</p>
        </div>

        <div className="card">
          <h3>Diagnosis</h3>
          <p className="value">{patient.Diagnosis}</p>
        </div>

        <div className="card">
          <h3>Procedure</h3>
          <p className="value">{patient.Procedure}</p>
        </div>

        <div className="card">
          <h3>Primary Doctor</h3>
          <p className="value">{patient['Primary doctor/physician']}</p>
        </div>

        <div className="card">
          <h3>Treatment Plan</h3>
          <p className="value">{patient['Treatment plan']}</p>
        </div>

        <div className="card">
          <h3>Medication</h3>
          <p className="value">{patient.Medication}</p>
        </div>

        <div className="card">
          <h3>Emergency Contact</h3>
          <p className="value">{patient['Emergency contact']}</p>
        </div>
      </div>

    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch('');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const patient = data[id] || null;

    return {
      props: {
        patient,
      },
    };
  } catch (error) {
    console.error("Failed to fetch patient data:", error);
    return {
      props: {
        patient: null,
      },
    };
  }
}
