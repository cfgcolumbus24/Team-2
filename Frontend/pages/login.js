import { useRouter } from 'next/router'; // Import useRouter from Next.js
import { useAuth } from '../context/AuthContext'; // Import useAuth from AuthContext
import React, { useState, useEffect } from 'react';

const LoginAuthentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [profiles, setProfiles] = useState([]);
  const { login } = useAuth();
  const router = useRouter(); // Initialize the router

  const roles = ['superadmin', 'clinician', 'director'];

  // Fetch profiles from API when the component mounts
  useEffect(() => {
    async function fetchProfiles() {
      try {
        const response = await fetch('/api/profiles?type=allProfiles');
        if (!response.ok) throw new Error('Failed to fetch profiles');
        const data = await response.json();
        setProfiles(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load profiles.');
      }
    }
    fetchProfiles();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Find a matching profile based on username and role
    const matchingProfile = profiles.find(
      (profile) =>
        profile.email.toLowerCase() === username.trim().toLowerCase() &&
        profile.role.toLowerCase() === role.trim().toLowerCase()
    );

    if (!matchingProfile) {
      setError('Invalid username or role.');
      return;
    }

    // Call the login function from AuthContext with username, role, and name
    login(username, role, matchingProfile.name);

    // Redirect to the /home page after login
    router.push('/home'); // navigate to the /home page
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      {error && <p className="errorMessage">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select a role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default LoginAuthentication;