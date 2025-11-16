
import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    price: 79.99,
    inStock: true
  },
  {
    id: 2,
    name: "Smartphone X Pro",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    price: 999.99,
    inStock: true
  },
  {
    id: 3,
    name: "Mechanical Keyboard RGB",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    price: 129.99,
    inStock: false
  },
  {
    id: 4,
    name: "Gaming Mouse Wireless",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    price: 59.99,
    inStock: true
  },
  {
    id: 5,
    name: "4K Ultra HD Monitor",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
    price: 349.99,
    inStock: true
  },
  {
    id: 6,
    name: "Laptop Backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    price: 45.99,
    inStock: true
  },
  {
    id: 7,
    name: "Smart Watch Series 5",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    price: 199.99,
    inStock: false
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
    price: 29.99,
    inStock: true
  },
  {
    id: 9,
    name: "Noise Cancelling Earbuds",
    image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e0?w=400&h=300&fit=crop",
    price: 149.99,
    inStock: true
  },
  {
    id: 10,
    name: "Portable Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    price: 89.99,
    inStock: false
  }
];

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Our Products</h1>
        <p>Discover our amazing collection of tech products</p>
      </header>
      
      <div className="products-container">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;