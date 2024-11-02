import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // Fetch profiles from the API when the component mounts
  useEffect(() => {
    fetch('/api/profiles')
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
        setError('Failed to fetch profiles');
        setLoading(false);
      });
  }, []);

  // Filter profiles based on search input
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>User Profiles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>User Profiles</h1>


        {error && <p className={styles.error}>{error}</p>}
        {loading ? (
          <p className={styles.description}>Loading profiles...</p>
        ) : (
          <div className={styles.grid}>
            {filteredProfiles.map((profile) => (
              <div key={profile.id} className={styles.card}>
                <h3>{profile.name}</h3>
                <p>Email: {profile.email}</p>
                <p>Role: {profile.role}</p>
                <p>Age: {profile.age}</p>
                <p>Height: {profile.height}</p>
                <p>Weight: {profile.weight}</p>
                <p>Summary: {profile.summary}</p>
                {profile.conditions.length > 0 && (
                  <p>Conditions: {profile.conditions.join(', ')}</p>
                )}
                {profile.notes.length > 0 && (
                  <p>Notes: {profile.notes.join('. ')}</p>
                )}
                {profile.tasks.length > 0 && (
                  <p>Tasks: {profile.tasks.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .search {
          margin-bottom: 2rem;
          padding: 0.5rem;
          font-size: 1rem;
        }
        .error {
          color: red;
          margin-bottom: 1rem;
        }
        .grid {
          display: flex;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 300px;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}