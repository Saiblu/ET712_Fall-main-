import React from 'react';

const ProductList = ({ products, addToCart, cart }) => {
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button 
                onClick={() => addToCart(product)}
                className={`add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;