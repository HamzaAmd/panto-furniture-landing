'use client'

import React, { useState } from 'react'
import { navigationLinks } from '@/lib/data'
import Container from './ui/Container'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Panto
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <a 
                  href={link.url}
                  className="text-white hover:text-primary-orange transition-colors duration-200"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <button 
            className="text-primary-orange text-2xl hover:scale-110 transition-transform"
            aria-label="Shopping cart"
          >
            🛒
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden pb-4 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <a 
                  href={link.url}
                  className="block text-white hover:text-primary-orange transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  )
}

export default Header