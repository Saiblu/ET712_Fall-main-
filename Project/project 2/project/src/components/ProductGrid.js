import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';

// Sample product data
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones",
    detailedDescription: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    price: 199.99,
    image: "https://via.placeholder.com/300x200",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Fitness tracking smart watch",
    detailedDescription: "Advanced smart watch with heart rate monitoring, GPS, and 7-day battery life.",
    price: 299.99,
    image: "https://via.placeholder.com/300x200",
    category: "Electronics",
    rating: 4.2
  },
  // Add 7 more products...
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  return (
    <div className="page-container">
      <h1>All Products</h1>
      <ProductGrid 
        products={products} 
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Products;