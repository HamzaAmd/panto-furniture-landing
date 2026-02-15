// Color Palette
export const colors = {
  primary: {
    orange: '#E58411',
  },
  dark: {
    bg: '#2C3E50',
  },
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
  },
  bg: {
    light: '#F5F5F5',
  },
  white: '#FFFFFF',
}

// Product categories
export const productCategories = ['Chair', 'Beds', 'Sofa', 'Lamp'] as const

export type ProductCategory = typeof productCategories[number]
