import React from "react";

const ModalWindow = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    <img src={product.image} alt={product.title} className="modal-product-image" />
                    <h2 className="modal-product-title">{product.title}</h2>
                    <p className="modal-product-description">{product.description}</p>
                    <p className="modal-product-price">${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
export default ModalWindow;