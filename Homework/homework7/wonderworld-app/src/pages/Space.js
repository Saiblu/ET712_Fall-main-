import React from 'react';

const Space = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Space Wonders</h1>
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Starry night sky"
            className="page-image"
          />
        </div>
        <div className="text-content">
          <p className="page-paragraph">
            There's a giant cloud of alcohol floating in space! Located 6,500 light-years away, 
            this interstellar cloud contains enough ethyl alcohol to make 400 trillion trillion pints of beer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Space;