import React from 'react'
import Container from './ui/Container'
import { testimonials } from '@/lib/data'

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full font-semibold text-sm mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Our Client Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-bg-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Client Image */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span 
                    key={i} 
                    className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-text-secondary leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
