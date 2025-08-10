'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/image/logo.png"
          alt="PN INFOSYS Logo"
          className="h-16"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-md font-bold items-center text-black">
        <Link href="/" className="hover:text-blue-500">HOME</Link>
        <Link href="/about" className="hover:text-blue-500">ABOUT</Link>
        <Link href="/service" className="hover:text-blue-500">SERVICE</Link>
        <Link href="/training" className="hover:text-blue-500">TRAINING</Link>
        <Link href="/workshop" className="hover:text-blue-500">WORKSHOP</Link>
        <Link href="/placement" className="hover:text-blue-500">PLACEMENT</Link>
        <Link href="/events" className="hover:text-blue-500">EVENTS</Link>
        <Link href="/contact" className="hover:text-blue-500">CONTACT</Link>
        <Link
          href="/internship"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          INTERNSHIP
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-md md:hidden flex flex-col items-center space-y-4 py-4 z-40">
          <Link href="/" onClick={toggleMenu} className="hover:text-blue-500">HOME</Link>
          <Link href="/about" onClick={toggleMenu} className="hover:text-blue-500">ABOUT</Link>
          <Link href="/service" onClick={toggleMenu} className="hover:text-blue-500">SERVICE</Link>
          <Link href="/training" onClick={toggleMenu} className="hover:text-blue-500">TRAINING</Link>
          <Link href="/workshop" onClick={toggleMenu} className="hover:text-blue-500">WORKSHOP</Link>
          <Link href="/placement" onClick={toggleMenu} className="hover:text-blue-500">PLACEMENT</Link>
          <Link href="/events" onClick={toggleMenu} className="hover:text-blue-500">EVENTS</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-500">CONTACT</Link>
          <Link
            href="/internship"
            onClick={toggleMenu}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            INTERNSHIP
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
