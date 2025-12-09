import React from "react";
import ModalWindow from "./ModalWindow";

const Card = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

const handleAddToCart = () => {
    onAddToCart({...product, quantity});
    setQuantity(1);
  };

    return (
        <>
            <div className="card">
                <div  
                className="card-image"
                onClick={()=> setIsModalOpen(true)}
                style={{cursor: 'pointer'}}
                >
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-description">{product.description}</p>
                    <p className="card-price">${product.price.toFixed(2)}</p>
                </div>
                <div className="quantity-selector">
                    <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                    <input
                    type="number"
                    id={`quantity-${product.id}`}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    />
                </div>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
            <ModalWindow 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                product={product} 
            />
        
        </>
    );
}

export default Card;