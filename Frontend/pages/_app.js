import '../styles/global.css'; // Ensure this exists for any global styles
import '../styles/Clinical.css'; // Import Clinical.css as a global stylesheet

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
