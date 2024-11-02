import '../styles/global.css'; // Ensure this exists for any global styles
import { AuthProvider } from '../context/AuthContext';
import '../styles/Clinical.css'; // Import Clinical.css as a global stylesheet
import './login.css';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
