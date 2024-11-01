import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PatientDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchPatients() {
      const response = await fetch('/patients.json');
      const data = await response.json();
      setPatient(data[id]);
    }
    if (id) fetchPatients();
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Patient Details: {patient.Name}</h1>
      {/* Rest of the patient details */}
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
