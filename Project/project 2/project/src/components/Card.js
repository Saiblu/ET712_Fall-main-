import { useState } from 'react';
import ModalWindow from './ModalWindow';

const Card = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setQuantity(1);
  };

  return (
    <>
      <div className="card">
        <div className="card-image-container" onClick={() => setIsModalOpen(true)}>
          <img src={product.image} alt={product.title} className="card-image" loading="lazy" />
          {product.sale && <span className="card-sale">SALE</span>}
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-description">{product.description}</p>
          
          <div className="card-price-section">
            {product.originalPrice ? (
              <>
                <span className="card-price-sale">${product.price.toFixed(2)}</span>
                <span className="card-price-original">${product.originalPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="card-price">${product.price.toFixed(2)}</span>
            )}
            <span className="card-rating">⭐ {product.rating}</span>
          </div>
          
          <div className="card-actions">
            <div className="quantity-selector">
              <label>Qty:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default Card;