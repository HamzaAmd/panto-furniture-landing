// Navigation data
export const navigationLinks = [
  { title: 'Furniture', url: '#furniture' },
  { title: 'Shop', url: '#shop' },
  { title: 'About Us', url: '#about' },
  { title: 'Contact', url: '#contact' },
]

// Product data
export interface Product {
  id: number
  name: string
  category: 'Chair' | 'Beds' | 'Sofa' | 'Lamp'
  price: number
  rating: number
  image: string
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Sabotier Armchair', 
    category: 'Chair',
    price: 392, 
    rating: 5,
    image: '/images/chair1.jpg'
  },
  { 
    id: 2, 
    name: 'Battier Chair', 
    category: 'Chair',
    price: 289, 
    rating: 4,
    image: '/images/chair2.jpg'
  },
  { 
    id: 3, 
    name: 'Addy Chair', 
    category: 'Chair',
    price: 519, 
    rating: 5,
    image: '/images/chair3.jpg'
  },
  { 
    id: 4, 
    name: 'Nyemta Chair', 
    category: 'Chair',
    price: 521, 
    rating: 4,
    image: '/images/chair4.jpg'
  },
  {
    id: 5,
    name: 'Modern Bed Frame',
    category: 'Beds',
    price: 899,
    rating: 5,
    image: '/images/bed1.jpg'
  },
  {
    id: 6,
    name: 'Classic Sofa',
    category: 'Sofa',
    price: 1299,
    rating: 5,
    image: '/images/sofa1.jpg'
  },
  {
    id: 7,
    name: 'Designer Lamp',
    category: 'Lamp',
    price: 189,
    rating: 4,
    image: '/images/lamp1.jpg'
  },
]

// Features for Why Choose Us section
export interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    id: 1,
    icon: '✨',
    title: 'Luxury Facilities',
    description: 'Experience premium quality furniture with luxury facilities that enhance your living space.',
  },
  {
    id: 2,
    icon: '💰',
    title: 'Affordable Price',
    description: 'Get the best value for your money with our competitive pricing on high-quality furniture.',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Many Choices',
    description: 'Choose from a wide variety of styles, colors, and designs to match your unique taste.',
  },
]

// Testimonials
export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  review: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    image: '/images/client1.jpg',
    rating: 5,
    review: 'The furniture quality exceeded my expectations. My clients love the minimalist designs and the attention to detail is remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    image: '/images/client2.jpg',
    rating: 5,
    review: 'Panto transformed my living space completely. The modern aesthetic and comfort of their furniture is unmatched.',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Architect',
    image: '/images/client3.jpg',
    rating: 4,
    review: 'I recommend Panto to all my clients. Their sustainable materials and craftsmanship are top-notch.',
  },
]

// Material gallery images
export const materialImages = [
  '/images/material1.jpg',
  '/images/material2.jpg',
  '/images/material3.jpg',
  '/images/material4.jpg',
]

// Footer data
export const footerLinks = {
  products: [
    { title: 'Chairs', url: '#chairs' },
    { title: 'Beds', url: '#beds' },
    { title: 'Sofas', url: '#sofas' },
    { title: 'Lamps', url: '#lamps' },
  ],
  company: [
    { title: 'About Us', url: '#about' },
    { title: 'Our Team', url: '#team' },
    { title: 'Careers', url: '#careers' },
    { title: 'Contact', url: '#contact' },
  ],
  support: [
    { title: 'Help Center', url: '#help' },
    { title: 'Shipping', url: '#shipping' },
    { title: 'Returns', url: '#returns' },
    { title: 'FAQ', url: '#faq' },
  ],
}

export const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
]