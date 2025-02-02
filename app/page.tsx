/**
 * Home component representing the main page of the website.
 * 
 * @returns {JSX.Element} The Home page component.
 */

import Link from 'next/link';
import './globals.css' ;


export default function Home() {
  return (
    <div style={{ padding: '0 20px' }}>
      <main style={{ width: '1200px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main heading */}
        
        <center>
          <h1 className="main-heading">
            My Name is Michael Lundquist. Welcome to my Website!
          </h1>
          <p>Feel free to stay as long as you would like.</p>
        </center>
        <br></br> 

        {/* About Us Section */}
        <center><section>
          <img
            src="/char.gif"
            alt="About Us"
            style={{ width: '20%', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
          />
        </section></center>

        {/* Our Services Section */}
        <center><section>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }}>
            <img
              src="/pikachu.gif"
              alt="Service 1"
              style={{ width: '400px', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            />
            <img
              src="/chillmoon.gif"
              alt="Service 2"
              style={{ width: '400px', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </section>
        
        </center>

        {/* Gallery Section */}
        <center>
        <section>
          <h2>Hello There!</h2>
          <p>These are some of my favorite GIFs</p>
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
        </center>
      </main>

      <br />

      {/* Navigation Bar */}
      <center><nav>
        <p>This is the Navigation Bar</p>
        <ul>
          <li>
            <b><Link href="/blog">Blog</Link></b>
          </li>
          <li>
            <b><Link href="/contact">Contact</Link></b>
          </li>
        </ul>
      </nav></center>
    </div>
  );
}
