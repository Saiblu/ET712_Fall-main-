import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxRate = 0.0816;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)} each</p>
                  
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>NY Sales Tax (8.16%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <Link to="/cart" className="checkout-btn">
              Go to Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;