'use client'
import { useState } from 'react';

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
          <a href="/" className="text-xl font-semibold">
            Your Logo
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        <ul className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          sm:flex flex-col sm:flex-row gap-6 
          items-start sm:items-center
        `}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href}
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;