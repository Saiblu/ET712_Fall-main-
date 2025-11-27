import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, updateQuantity, totalPrice }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart</h1>
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <Link to="/" className="continue-shopping-link">
          ← Continue Shopping
        </Link>
      </div>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
              aria-label="Remove item"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total-section">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;