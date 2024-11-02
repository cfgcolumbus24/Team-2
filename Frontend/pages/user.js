import React from 'react';
import { useRouter } from 'next/router';

const LoginButton = ({ role, onClick }) => {
  return (
    <button className="loginButton" onClick={onClick}>
      {role}
    </button>
  );
};

const LoginAuthentication = () => {
  const router = useRouter();
  const roles = ['Super Admin', 'Director', 'Clinician'];

  const handleLoginClick = (role) => {
    router.push({
      pathname: '/login',
      query: { role }, // Pass the role as a query parameter
    });
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
        <h2 className="loginTitle">Logging in as:</h2>
        <nav>
          {roles.map((role, index) => (
            <LoginButton key={index} role={role} onClick={() => handleLoginClick(role)} />
          ))}
        </nav>
      </section>
    </main>
  );
};

export default LoginAuthentication;
