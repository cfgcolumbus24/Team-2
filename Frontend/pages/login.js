import React, { useState } from 'react';

const LoginButton = ({ role }) => {
  return (
    <button className="loginButton">
      {role}
    </button>
  );
};

const LoginAuthentication = () => {
  const roles = ['Login'];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Logging in with:", { username, password });
    // Add actual login handling here
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
        
        {/* Username Textbox */}
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
      </section>
    </main>
  );
};

export default LoginAuthentication;
