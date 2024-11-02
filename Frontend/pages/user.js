import React from 'react';

const LoginButton = ({ role }) => {
  return (
    <button className="loginButton">
      {role}
    </button>
  );
};

const LoginAuthentication = () => {
  const roles = ['Super Admin', 'Director', 'Clinician'];

  return (
    <main className="loginAuthentication">
      <section className="authenticationContainer">
        <header className="logoContainer">
          <div className="logoWrapper">
            <img 
              src="/Net2Connect_Logo.png"  /* Path to image in the public folder */
              alt="Net2Connect Logo" 
              className="logoImage" 
            />
          </div>
        </header>
        <h2 className="loginTitle">Logging in as:</h2>
        <nav>
          {roles.map((role, index) => (
            <LoginButton key={index} role={role} />
          ))}
        </nav>
      </section>
    </main>
  );
};

export default LoginAuthentication;
