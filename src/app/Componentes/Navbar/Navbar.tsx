'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow px-4 md:px-10 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image src="/Images/skg-logo.png" alt="Logo" width={140} height={80} />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-base   text-black font-medium relative">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      {/* Dropdown Wrapper */}
      <div className="relative group">
        <div className="flex items-center gap-1 cursor-pointer">
          <Link href="#" className="hover:text-pink-600 transition">
            Album PSD
          </Link>
          <ChevronDown size={16} className="text-gray-500 group-hover:text-pink-600 transition" />
        </div>

        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
          <ul className="py-2">
            <li>
              <Link
                href="/albumpsd"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              >
                12 X 36
              </Link>
            </li>
            <li>
              <Link
                href="/albumpsd"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              >
               18 X 24
              </Link>
            </li>
            <li>
              <Link
                href="/albumpsd"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              >
                 20 X 30
              </Link>
            </li>
            <li>
              <Link
                href="/albumpsd"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              >
                14 X 40
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Link href="courses">Courses</Link>
     <Link href="#"> Invitation Video </Link>
     <Link href="#">Clip Art</Link>
     <Link href="/contact">Contact</Link>
								
    </nav>

        {/* Right: Contact Info (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-full">
            <Phone size={20} />
          </div>
          <div className="text-sm leading-tight">
            <p className="text-gray-600">Contact us</p>
            <p className="font-bold text-black">+91 9990144668</p>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button onClick={() => setOpen(true)} className="md:hidden z-50">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={clsx(
          'fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 p-6 space-y-6',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src="/Images/skg-logo.png" alt="Logo" width={120} height={60} />
          <button onClick={() => setOpen(false)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-base font-medium text-gray-800">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/album" onClick={() => setOpen(false)}>Album PSD</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3 pt-6 border-t">
          <div className="bg-red-500 text-white p-2 rounded-full">
            <Phone size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-600">Contact us</p>
            <p className="font-bold text-black">+91 9990144668</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        />
      )}
    </header>
  );
}
