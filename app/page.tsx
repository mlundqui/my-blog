
/**
 * Home component representing the main page of the website.
 * 
 * @returns {JSX.Element} The Home page component.
 */

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main style={{ width: '100%' }}>
        {/* Main heading */}
        <h1>Welcome to the Home Page!</h1>
        <p>This is the Home Page of my website.</p>
        <br></br> 

        {/* About Us Section */}
        <section>
          <h2>About Us</h2>
          <p>Learn more about what we do and our mission.</p>
          <img
            src="/char.gif"
            alt="About Us"
            style={{ width: '20%', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
          />
        </section>

        {/* Our Services Section */}
        <section>
          <h2>Our Services</h2>
          <p>Explore the services we offer to our customers.</p>
          <div>
            <img
              src="/pikachu.gif"
              alt="Service 1"
              style={{ width: '20%', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            />
            <img
              src="/chillmoon.gif"
              alt="Service 2"
              style={{ width: '20%', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2>Gallery</h2>
          <p>Check out some of our featured work!</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }}>
            <img
              src="/dogbanjo.gif"
              alt="Gallery Image 1"
              style={{ width: '30%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
            />
            <img
              src="/snorlax.gif"
              alt="Gallery Image 2"
              style={{ width: '30%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
            />
            <img
              src="/polarbear.gif"
              alt="Gallery Image 3"
              style={{ width: '30%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </section>
      </main>

      <br />

      {/* Navigation Bar */}
      <nav>
        <p>This is the Navigation Bar</p>
        <ul>
          <li>
            <b><Link href="/blog">Blog</Link></b>
          </li>
          <li>
            <b><Link href="/contact">Contact</Link></b>
          </li>
        </ul>
      </nav>
    </div>
  );
}


