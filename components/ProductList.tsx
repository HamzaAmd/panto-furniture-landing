import React from 'react';

const ProductList = ({ products, categories, onAddToCart }) => {
  const [filteredCategory, setFilteredCategory] = React.useState('');

  const handleCategoryChange = (e) => {
    setFilteredCategory(e.target.value);
  };

  const filteredProducts = filteredCategory
    ? products.filter(product => product.category === filteredCategory)
    : products;

  return (
    <div className='container mx-auto p-4'>
      <select className='mb-4 p-2 border rounded' onChange={handleCategoryChange}>
        <option value=''>All Categories</option>
        {categories.map(category => ( 
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredProducts.map(product => (
          <div key={product.id} className='border rounded-lg overflow-hidden shadow-lg'>
            <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h2 className='text-xl font-bold'>{product.name}</h2>
              <p className='text-gray-700'>{product.description}</p>
              <p className='text-lg font-semibold'>${product.price}</p>
              <button className='mt-4 bg-blue-500 text-white p-2 rounded' onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;