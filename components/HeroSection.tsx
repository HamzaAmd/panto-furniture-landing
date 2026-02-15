import React from 'react'
import Container from './ui/Container'
import Button from './ui/Button'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-dark-bg text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative stripe texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, white 10px, white 11px)'
      }} />
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Make Your Interior More Minimalistic & Modern
            </h1>
            <p className="text-lg text-gray-300">
              Turn your room into a minimalistic masterpiece with our carefully curated furniture collection. 
              Experience the perfect blend of style, comfort, and functionality.
            </p>
            <Button variant="primary" className="mt-4">
              Select Furniture →
            </Button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-orange/20 to-transparent rounded-full flex items-center justify-center">
              {/* Placeholder for sofa image */}
              <div className="text-9xl">🛋️</div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-4xl">🌿</div>
            <div className="absolute bottom-8 left-4 text-3xl">🧺</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection