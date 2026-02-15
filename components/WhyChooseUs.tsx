import React from 'react'
import Container from './ui/Container'
import { features } from '@/lib/data'

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why Choosing Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs