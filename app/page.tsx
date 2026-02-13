// Main Home Page
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <ProductList />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
