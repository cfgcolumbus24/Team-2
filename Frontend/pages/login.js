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
  const router = useRouter();
  const roles = ['Login'];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [twoFACode, setTwoFACode] = useState(''); // Store user-entered 2FA code

  const handleLogin = () => {
    if (username === 'jeffdoe@gmail.com' && password === 'password123') {
      // Enable the 2FA step
      setIs2FAEnabled(true);
      setNotification('A 2FA code has been sent to your registered email.'); // Simulated notification
    } else {
      setNotification('Incorrect Email or Password');
    }
  };

  const handle2FAVerification = () => {
    if (twoFACode === '123') { // Fixed dummy code "123" for verification
      router.push('/mainDashboard'); // Navigate to mainDashboard if 2FA is successful
    } else {
      // Reset back to login step and show "Wrong Code" message
      setIs2FAEnabled(false);
      setTwoFACode('');
      setNotification('Wrong Code');
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
        
        {/* Show login fields only if 2FA is not yet enabled */}
        {!is2FAEnabled ? (
          <>
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
          </>
        ) : (
          <>
            {/* 2FA Code Textbox */}
            <input
              type="text"
              placeholder="Enter 2FA Code"
              value={twoFACode}
              onChange={(e) => setTwoFACode(e.target.value)}
              className="queryInput"
            />
            <button onClick={handle2FAVerification} className="loginButton">
              Verify 2FA Code
            </button>
          </>
        )}
        
        {/* Notification Message */}
        {notification && <p className="notification">{notification}</p>}
      </section>
    </main>
  );
};

export default LoginAuthentication;
