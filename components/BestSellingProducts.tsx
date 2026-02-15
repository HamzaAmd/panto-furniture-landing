import React from 'react';

// Sample data for products
const products = [
    { id: 1, name: 'Product 1', image: 'url1', price: 100 },
    { id: 2, name: 'Product 2', image: 'url2', price: 200 },
    // Add more products as needed
];

const BestSellingProducts: React.FC = () => {
    return (
        <div>
            <h2>Best Selling Products</h2>
            <div className="filter">
                <button>All</button>
                <button>On Sale</button>
                <button>New Arrivals</button>
                {/* Additional filters can be added here */}
            </div>
            <div className="carousel">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;