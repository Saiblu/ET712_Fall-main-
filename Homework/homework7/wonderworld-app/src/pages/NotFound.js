import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container">
      <div className="page-content not-found">
        <h1 className="page-title">404 - Page Not Found</h1>
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1584824486537-46e69f3ca36c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Lost in space"
            className="page-image"
          />
        </div>
        <div className="text-content">
          <p className="page-paragraph">
            Oops! It looks like you've ventured into uncharted territory. 
          </p>
          <Link to="/" className="home-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;