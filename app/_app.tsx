import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* Add padding to prevent content from overlapping with the fixed Navbar */}
      <main style={{ paddingTop: '70px' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
