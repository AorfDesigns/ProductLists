import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('None');
    {/* Fetching of API */}
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  {/* Ends of Fetching of API*/}

    {/* Methods for Filtering Category */}
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  {/* End of Methods for Filtering Category */}

    {/* Methods for Sorting */}
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

    {/* End of Methods for Sorting */}

   {/* Conditional Statement to Filter Products */}
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => {
        if (selectedCategory === 'groceries') {
          return product.category === 'groceries' || product.tags.includes('Fruits') || product.tags.includes('Vegetables');
        }
        return product.category === selectedCategory;
      });

        {/* Conditional Statement to render Filter Ends */}
   {/* Conditional Statement to Sort out Products */}
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria === 'Price: Low to High') {
      return a.price - b.price;
    } else if (sortCriteria === 'Price: High to Low') {
      return b.price - a.price;
    } else if (sortCriteria === 'Rating: High to Low') {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });
    {/* End of Conditional Statement to Sort out Products */}

  {/* This is for the reduced description text */}
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };
    {/* End of reduced description text */}
    
  {/* Conditioning rendering of ratings */}
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={farStar} className="text-gray-300" />);
      }
    }
    return stars;
  };
  {/* End of Conditioning rendering */}
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 lg:text-left md:text-left text-center">Product List</h1>
      {/*  This is the code for Filtering*/}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="mr-2">Filter by Category:</label>
          <select 
            value={selectedCategory} 
            onChange={handleCategoryChange} 
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
            {/* Add more categories as needed */}
          </select>
        </div>
          {/* This is where it ends */}

            {/* This is the code for Sorting*/}
        <div className="flex items-center">
          <label className="mr-2">Sort by:</label>
          <select 
            value={sortCriteria} 
            onChange={handleSortChange} 
            className="p-2 border rounded"
          >
            <option value="None">None</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Rating: High to Low">Rating: High to Low</option>
            {/* Add more sorting criteria as needed */}
          </select>
        </div>
          {/* This is the end of Sorting code */}
      </div>
        {/* Mapping of Array Cards that is fetched */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <div key={product.id} className="p-4 rounded-lg  relative hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
            <div className="bg-gray-200 p-4 rounded-lg mb-4">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded" />
            </div>
            <div className="absolute top-4 right-6 bg-orange-400 text-white p-2 rounded">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="text-left">
              <h2 className="text-xl text-gray-800 font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-1 font-bold">${product.price}</p>
              <div className="flex items-center mb-1">
                {renderRatingStars(product.rating)}
                <span className="ml-2 text-gray-500">{product.rating}</span>
              </div>
              <p className="text-gray-500">Stock: {product.stock}</p>
              <p className="text-gray-400">
                {truncateDescription(product.description, 40)}
                {product.description.length > 40 && (
                  <button className="text-orange-400 hover:underline focus:outline-none" onClick={() => alert(product.description)}>
                    Read More
                  </button>
                )}
              </p>
              <div className="flex flex-wrap mt-2">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-orange-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* End of Array Cards */}
    </div>
  );
};

export default ProductList;
