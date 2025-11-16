import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { name, image, price, inStock } = product;

  return (
    <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image">
        <img src={image} alt={name} />
        {!inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <div className="availability">
          <span className={`status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;