import React from 'react';

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Welcome to WonderWorld</h1>
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
            alt="Beautiful landscape"
            className="page-image"
          />
        </div>
        <div className="text-content">
          <p className="page-paragraph">
            Did you know that the Earth's rotation is gradually slowing down? 
            This deceleration is happening almost imperceptibly, at approximately 
            17 milliseconds per hundred years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;