import { useState } from 'react';

const LinkDataPage = () => {
    const [connections, setConnections] = useState({
        EHR: false,
        Financial: false,
        Avatar: false,
    });

    const handleConnect = (type) => {
        // Open a popup window to microsoft.com
        const popup = window.open('https://www.microsoft.com', '_blank', 'width=600,height=600');

        // Check if the popup is closed and update the connection state
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

    return (
        <div style={{ padding: '20px' }}>
            <h1>Link Data Sources</h1>
            <div style={{ marginBottom: '15px' }}>
                <span style={{ marginRight: '20px' }}>Link EHR Data</span>
                <button
                    onClick={() => handleConnect('EHR')}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: connections.EHR ? '#28a745' : '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {connections.EHR ? 'Connected' : 'Connect'}
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <span style={{ marginRight: '20px' }}>Link Financial Data</span>
                <button
                    onClick={() => handleConnect('Financial')}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: connections.Financial ? '#28a745' : '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {connections.Financial ? 'Connected' : 'Connect'}
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <span style={{ marginRight: '20px' }}>Link Avatar Data</span>
                <button
                    onClick={() => handleConnect('Avatar')}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: connections.Avatar ? '#28a745' : '#0070f3',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {connections.Avatar ? 'Connected' : 'Connect'}
                </button>
            </div>
        </div>
    );
};

export default LinkDataPage;
