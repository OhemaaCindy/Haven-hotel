import React, { useState } from 'react';
import { Button } from './ui/button';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  className?: string;
}

// Navigation items
const navigationItems: NavItem[] = [
  { name: 'Rental', href: '/rental' },
  { name: 'Listing', href: '/listing' },
  { name: 'Location', href: '/location' },
  { name: 'Explore', href: '/explore' },
];

// Navbar Component
export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className={`bg-[#1a1a1a] text-white ${className}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">HAVEN</span>
             
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button className="rounded-full border border-gray-600 px-6 py-2 text-sm font-medium text-white hover:border-gray-400 transition-colors duration-200">
            SIGN IN
          </Button>
          <Button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors duration-200">
            SIGN UP
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <Button className="w-full rounded-full border border-gray-600 px-6 py-2 text-sm font-medium text-white hover:border-gray-400 transition-colors duration-200">
                SIGN IN
              </Button>
              <Button className="w-full rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors duration-200">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

