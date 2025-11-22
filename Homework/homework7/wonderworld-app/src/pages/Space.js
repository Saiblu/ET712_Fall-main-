import React from "react";

const Space = () => {
    return (
        <div className="page-container">
            <div className="page-content">
                <h1 className="page-title">Space Wonders</h1>
                <div className="image-container">
                    <img src="./images/space.jpg"
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