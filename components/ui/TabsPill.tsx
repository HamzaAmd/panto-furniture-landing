import React from 'react'

interface TabsPillProps {
  categories: readonly string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const TabsPill: React.FC<TabsPillProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category} 
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            activeCategory === category 
              ? 'bg-primary-orange text-white' 
              : 'bg-gray-100 text-text-primary hover:bg-gray-200'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))} 
    </div>
  )
}

export default TabsPill