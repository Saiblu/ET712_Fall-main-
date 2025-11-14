import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbars = function () {
    return (
        <nav className='navbar'>
            <div className='qcclink'>
                <a href="https://www.qcc.cuny.edu" target="_blank" rel="noopener noreferrer">QCC</a>
            </div>

            <div className='btngroup'>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/about">
                    <button>About Us</button>
                </Link>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
            </div>
        </nav>
    )
}
export default Navbars;