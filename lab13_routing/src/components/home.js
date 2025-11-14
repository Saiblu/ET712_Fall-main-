import React from 'react';
import '../App.css';
import aboutimg from '../images/about.png';
import contactimg from '../images/contact.png';
import { Link } from 'react-router-dom';

const Home = function () {
    return (
        <>
            <header className='header'>
                <h1 className='headertitle'>Welcome to Our Site</h1>
            </header>
            <main className='maincontainer'>
                <div className='cardimg'>
                    <Link to="/about" className='card-link'>
                        <img src={aboutimg} alt="About Us" className='card-image' />
                        <div className='card-overlay'>
                            <h3>About Us</h3>
                        </div>
                    </Link>
                </div>
                <div className='cardimg'>
                    <Link to="/contact" className='card-link'>
                        <img src={contactimg} alt="Contact Us" className='card-image' />
                        <div className='card-overlay'>
                            <h3>Contact Us</h3>
                        </div>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Home;