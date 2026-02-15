import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import BestSellingProducts from '@/components/BestSellingProducts'
import ExperienceSection from '@/components/ExperienceSection'
import MaterialsSection from '@/components/MaterialsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <BestSellingProducts />
      <ExperienceSection />
      <MaterialsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}