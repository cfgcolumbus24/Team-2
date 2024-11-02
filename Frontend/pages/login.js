import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginButton = ({ role, onClick }) => {
  return (
    <button className="loginButton" onClick={onClick}>
      {role}
    </button>
  );
};

const LoginAuthentication = () => {
  const router = useRouter(); // Get the router instance
  const roles = ['Login'];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleLogin = () => {
    if (username === 'jeffdoe@gmail.com' && password === 'password123') {
      router.push('/mainDashboard'); // Navigate to mainDashboard
    } else {
      setNotification('Incorrect Email or Password');
    }
  };

  return (
    <main className="loginAuthentication">
      <section className="authenticationContainer">
        <header className="logoContainer">
          <div className="logoWrapper">
            <img 
              src="/Logo.png"  /* Path to image in the public folder */
              alt="Net2Connect Logo" 
              className="logoImage" 
            />
          </div>
        </header>
        <h2 className="loginTitle">Log In:</h2>
        
        {/* Email Textbox */}
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="queryInput"
        />
        
        {/* Password Textbox */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="queryInput"
        />
        
        <nav>
          {roles.map((role, index) => (
            <LoginButton key={index} role={role} onClick={handleLogin} />
          ))}
        </nav>
        
        {/* Notification Message */}
        {notification && <p className="notification">{notification}</p>}
      </section>
    </main>
  );
};

export default LoginAuthentication;
