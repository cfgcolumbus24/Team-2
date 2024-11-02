// pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Company Website</h1>
      <p>Explore our latest features and financial insights.</p>

      {/* Link to Financial Page */}
      <Link href="/financial" style={{ padding: '10px', fontSize: '16px', color: 'blue', textDecoration: 'underline' }}>
        Go to Financial Dashboard
      </Link>
    </div>
  );
}