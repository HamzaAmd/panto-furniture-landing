import React from 'react'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
      <div className="relative aspect-square bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {/* Placeholder for image */}
          <span className="text-6xl">🪑</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-text-primary">{product.name}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-text-secondary">{product.rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-text-primary">${product.price}</p>
          <button className="w-10 h-10 rounded-full bg-primary-orange text-white flex items-center justify-center hover:bg-opacity-90 transition-all">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
