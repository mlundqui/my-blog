'use client';
import { useState } from 'react';
import Link from 'next/link';  // Make sure this import is correct

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { 
      label: 'Home', 
      href: '/'
    },
    { 
      label: 'Blog', 
      href: '/blog'
    },
    { 
      label: 'Contact', 
      href: '/contact'
    }
  ];

  return (
    <nav className="w-full px-8 py-4 sm:px-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Michael Lundquist 
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 relative group"
            aria-label="Toggle menu"
          >
            <div className={`
              w-6 h-0.5 bg-white transition-all duration-300 ease-out
              ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1'}
            `}></div>
            <div className={`
              w-6 h-0.5 bg-white transition-all duration-300 ease-out
              ${isMenuOpen ? 'opacity-0' : 'mb-1'}
            `}></div>
            <div className={`
              w-6 h-0.5 bg-white transition-all duration-300 ease-out
              ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}
            `}></div>
          </button>
        </div>

        <div className={`
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 sm:opacity-100 sm:translate-y-0'}
          ${isMenuOpen ? 'h-auto visible' : 'h-0 sm:h-auto invisible sm:visible'}
        `}>
          <ul className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {navItems.map((item) => (
              <li key={item.href} className="transform transition-all duration-300 ease-out hover:translate-x-2 sm:hover:translate-x-0 sm:hover:-translate-y-1">
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;