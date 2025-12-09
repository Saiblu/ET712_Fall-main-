import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';

// Sample product data - 9 products as required
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones",
    detailedDescription: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Fitness tracking smart watch",
    detailedDescription: "Advanced smart watch with heart rate monitoring, GPS, and 7-day battery life.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.2
  },
  {
    id: 3,
    title: "Laptop",
    description: "Ultra-thin business laptop",
    detailedDescription: "Powerful laptop with 16GB RAM, 512GB SSD, and 14-inch display.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.7
  },
  {
    id: 4,
    title: "Smartphone",
    description: "Latest model smartphone",
    detailedDescription: "Feature-rich smartphone with triple camera system and 5G connectivity.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.4
  },
  {
    id: 5,
    title: "Tablet",
    description: "10-inch tablet with stylus",
    detailedDescription: "Versatile tablet perfect for work and entertainment with included stylus.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.3
  },
  {
    id: 6,
    title: "Gaming Console",
    description: "Next-gen gaming console",
    detailedDescription: "High-performance gaming console with 4K gaming capability.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.8
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    description: "Portable waterproof speaker",
    detailedDescription: "Waterproof Bluetooth speaker with 20-hour battery life.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.1
  },
  {
    id: 8,
    title: "Camera",
    description: "Professional DSLR camera",
    detailedDescription: "24MP DSLR camera with kit lens for professional photography.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.6
  },
  {
    id: 9,
    title: "Monitor",
    description: "27-inch 4K monitor",
    detailedDescription: "Ultra HD monitor with HDR support and ergonomic stand.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop",
    category: "Electronics",
    rating: 4.4
  }
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
    alert(`${product.title} added to cart!`);
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