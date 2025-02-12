
'use client';

import "../globals.css";

export default function Blog({allPostsData}) {

  return (
    
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      
      

      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <center><h1 >BLOG</h1></center>
        <img
              src="/book.gif"
              alt="Service 1"
              style={{ width: '400px', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            />
       <img
              src="/books.gif"
              alt="Service 1"
              style={{ width: '400px', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            /> 
      </main>

      <footer style={{ backgroundColor: '#f4f4f4', color: '#555', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
        <p>&copy; 2025 Michael Lundquist. All rights reserved.</p> </footer>
    </div>
  
  );
}


