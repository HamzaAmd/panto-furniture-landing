import React from 'react'
import Container from './ui/Container'

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Placeholder for image */}
              <span className="text-9xl">🏡</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full font-semibold text-sm">
              EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              We Provide You The Best Experience
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              With years of expertise in furniture design and craftsmanship, we bring you an 
              unmatched experience in transforming your living spaces. Our team of skilled artisans 
              and designers work meticulously to ensure every piece meets the highest standards of 
              quality and style.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              From concept to delivery, we guide you through every step, making your furniture 
              shopping journey seamless and enjoyable. Experience the difference that attention 
              to detail and customer-first approach can make.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection
