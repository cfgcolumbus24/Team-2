import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LoginButton = ({ role, onClick }) => {
  return (
    <button className="loginButton" onClick={onClick}>
      {role}
    </button>
  );
};

const ConnectionModal = ({ onClose }) => {
  const [connections, setConnections] = useState({
    EHR: false,
    Financial: false,
    Avatar: false,
  });

  const handleConnect = (type) => {
    const popup = window.open('https://www.microsoft.com', '_blank', 'width=600,height=600');

    const checkPopupClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopupClosed);
        setConnections((prevConnections) => ({
          ...prevConnections,
          [type]: true,
        }));
      }
    }, 500);
  };

  const allConnected = Object.values(connections).every((status) => status);

  useEffect(() => {
    if (allConnected) {
      onClose();
    }
  }, [allConnected, onClose]);

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2>Link Data Sources</h2>
        <div style={{ marginBottom: '15px' }}>
          <span>Link EHR Data</span>
          <button
            onClick={() => handleConnect('EHR')}
            className={`connectButton ${connections.EHR ? 'connected' : ''}`}
          >
            {connections.EHR ? 'Connected' : 'Connect'}
          </button>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>Link Financial Data</span>
          <button
            onClick={() => handleConnect('Financial')}
            className={`connectButton ${connections.Financial ? 'connected' : ''}`}
          >
            {connections.Financial ? 'Connected' : 'Connect'}
          </button>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>Link Avatar Data</span>
          <button
            onClick={() => handleConnect('Avatar')}
            className={`connectButton ${connections.Avatar ? 'connected' : ''}`}
          >
            {connections.Avatar ? 'Connected' : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginAuthentication = () => {
  const router = useRouter();
  const roles = ['Login'];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [twoFACode, setTwoFACode] = useState('');
  const [showModal, setShowModal] = useState(false); // Add showModal state

  const handleLogin = () => {
    if (username === 'jeffdoe@gmail.com' && password === 'password123') {
      setIs2FAEnabled(true);
      setNotification('A 2FA code has been sent to your registered email.');
    } else {
      setNotification('Incorrect Email or Password');
    }
  };

  const handle2FAVerification = () => {
    if (twoFACode === '123') {
      router.push('/mainDashboard');
    } else {
      setIs2FAEnabled(false);
      setTwoFACode('');
      setNotification('Wrong Code');
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <main className="loginAuthentication">
      <section className="authenticationContainer">
        <header className="logoContainer">
          <div className="logoWrapper">
            <img 
              src="/Logo.png"  
              alt="Net2Connect Logo" 
              className="logoImage" 
            />
          </div>
        </header>
        <h2 className="loginTitle">Log In:</h2>
        
        {!is2FAEnabled ? (
          <>
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="queryInput"
            />
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
        
        {notification && <p className="notification">{notification}</p>}
        <button onClick={handleModalOpen} className="connectDataButton">
          Link Data Sources
        </button>
      </section>

      {showModal && <ConnectionModal onClose={handleModalClose} />}
    </main>
  );
};

export default LoginAuthentication;
