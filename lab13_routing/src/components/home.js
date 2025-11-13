import React from 'react';
import '../App.css';
import aboutimg from '../images/about.jpg';
import contactimg from '../images/contact.jpg';
import { Link } from 'react-router-dom';

const Home = function () {
    return (
        <>
            <header className='header'>Home Page
                <h1 className='headertitle'>Welcome to Our Site</h1>
            </header>
            <main className='maincontainer'>
                <div className='cardimg'>
                    <Link>
                        <img src={aboutimg} alt="About Us" />
                    </Link>
                </div>
                <div className='cardimg'>
                    <Link>
                        <img src={contactimg} alt="Contact Us" />
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Home;