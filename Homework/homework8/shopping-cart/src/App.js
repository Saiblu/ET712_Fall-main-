import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Sample product data
const initialProducts = [
  { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
  { id: 2, name: 'Smartphone', price: 699.99, image: '📱' },
  { id: 3, name: 'Headphones', price: 199.99, image: '🎧' },
  { id: 4, name: 'Smart Watch', price: 249.99, image: '⌚' },
  { id: 5, name: 'Tablet', price: 449.99, image: '📟' }
];

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item doesn't exist, add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Calculate total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              🛒 ShopCart
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Products</Link>
              <Link to="/cart" className="nav-link cart-link">
                Cart ({getTotalItems()})
              </Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <ProductList 
                  products={initialProducts} 
                  addToCart={addToCart}
                  cart={cart}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                  totalPrice={getTotalPrice()}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;