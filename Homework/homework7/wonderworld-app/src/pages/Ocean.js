import React from 'react';

const Ocean = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Ocean Mysteries</h1>
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Underwater coral reef"
            className="page-image"
          />
        </div>
        <div className="text-content">
          <p className="page-paragraph">
            Marine organisms can produce their own light through bioluminescence. 
            When disturbed, these creatures emit a beautiful blue-green glow that can make entire waves light up at night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ocean;