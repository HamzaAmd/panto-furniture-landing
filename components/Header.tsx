import React, { useState } from 'react';
import Container from './ui/Container';
import { navigationLinks } from '../lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            Panto
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}