import React from 'react'
import Container from './ui/Container'
import { materialImages } from '@/lib/data'

const MaterialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <Container>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full font-semibold text-sm mb-4">
            MATERIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Very Serious Materials For Making Furniture
          </h2>
          <p className="text-text-secondary text-lg">
            We use only the finest, sustainably sourced materials to craft furniture that stands 
            the test of time. Each piece is carefully selected for its quality, durability, and 
            environmental responsibility.
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {materialImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl">
                {/* Placeholder icons for materials */}
                {index === 0 && '🪵'}
                {index === 1 && '🧵'}
                {index === 2 && '🔨'}
                {index === 3 && '✨'}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MaterialsSection
