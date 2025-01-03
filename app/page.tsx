

import Link from 'next/link';

export default function Home() {
  return (
  
    <div>
      <nav> This is the Navigation Bar
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


