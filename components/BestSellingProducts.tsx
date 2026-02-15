'use client'

import React, { useState } from 'react'
import Container from './ui/Container'
import TabsPill from './ui/TabsPill'
import ProductCard from './ui/ProductCard'
import { products } from '@/lib/data'
import { productCategories } from '@/lib/constants'

const BestSellingProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(productCategories[0])

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  )

  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Best Selling Products
          </h2>
        </div>

        <TabsPill
          categories={productCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#shop" 
            className="text-primary-orange font-semibold hover:underline"
          >
            View All →
          </a>
        </div>
      </Container>
    </section>
  )
}

export default BestSellingProducts