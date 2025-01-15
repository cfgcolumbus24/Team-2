import { useRouter } from 'next/router';
// import './PatientDetails.css'; // Assuming this is imported in _app.js

export default function PatientDetails({ patient }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!patient) return <p>Patient not found.</p>;

  return (
    <div className="patient-details-container">
      <button onClick={() => router.back()} className="back-button">Back</button>
      <h1>Patient Data</h1>
      <p><strong>Name of Patient:</strong> {patient.Name}</p>

      <div className="card-container">
        {/* Vital signs and key metrics */}
        <div className="card">
          <h3>Blood Sugar</h3>
          <p className="value">{patient.Severity === 'Moderate' ? '80 mg/dL' : 'N/A'}</p>
         
          
        </div>

        <div className="card">
          <h3>Heart Rate</h3>
          <p className="value">98 bpm</p>
         
          
        </div>

        <div className="card">
          <h3>Blood Pressure</h3>
          <p className="value">102 / 72 mmHg</p>
         
          
        </div>

        <div className="card">
          <h3>Body Temperature</h3>
          <p className="value">99 °F</p>
         
          
        </div>

        <div className="card">
          <h3>Respiratory Rate</h3>
          <p className="value">15 rpm</p>
         
          
        </div>

        {/* Additional patient information */}
        {['DOB', 'Age', 'Ethnicity', 'Severity', 'Frequency of visits', 'Diagnosis', 'Procedure', 'Primary doctor/physician', 'Treatment plan', 'Medication', 'Emergency contact'].map((field, index) => (
          <div key={index} className="card">
            <h3>{field.replace(/_/g, ' ')}</h3>
            <p className="value">{patient[field] || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch('http://ec2-3-91-148-179.compute-1.amazonaws.com:3000/data/patient');
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
