import React from 'react'
import Container from './ui/Container'
import { footerLinks, socialLinks } from '@/lib/data'

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-light pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Panto</h3>
            <p className="text-text-secondary mb-6 max-w-sm">
              Crafting modern and minimalistic furniture that transforms your living spaces into 
              works of art. Quality, style, and comfort in every piece.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-text-primary">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-orange"
                />
                <button className="px-6 py-2 bg-primary-orange text-white rounded-lg hover:bg-opacity-90 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url}
                    className="text-text-secondary hover:text-primary-orange transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url}
                    className="text-text-secondary hover:text-primary-orange transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.url}
                    className="text-text-secondary hover:text-primary-orange transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-text-secondary text-sm">
              © 2026 Panto Furniture. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-text-secondary hover:text-primary-orange transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">
                    {social.icon === 'facebook' && '📘'}
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'linkedin' && '💼'}
                  </span>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a href="#privacy" className="text-text-secondary hover:text-primary-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-text-secondary hover:text-primary-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer