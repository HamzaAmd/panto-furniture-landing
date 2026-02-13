// lib/data.ts

export const navigationLinks = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' }
];

export const products = [
    { id: 1, name: 'Sofa', price: 499.99, description: 'A comfortable leather sofa', imageUrl: '/images/sofa.jpg' },
    { id: 2, name: 'Dining Table', price: 299.99, description: 'A spacious wooden dining table', imageUrl: '/images/dining-table.jpg' },
    { id: 3, name: 'Chair', price: 99.99, description: 'An ergonomic office chair', imageUrl: '/images/chair.jpg' }
];

export const testimonials = [
    { name: 'John Doe', message: 'Great furniture and excellent service!' },
    { name: 'Jane Smith', message: 'I love my new sofa, very comfortable.' },
    { name: 'Mike Johnson', message: 'Best shopping experience ever, highly recommend!' }
];