import React from 'react';
import './globals.css';

const Home = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src="/logo.png" alt="College Logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact_us">Contact</a></li>
                        {/* Departments Dropdown */}
                        <div className='dropdown'>
                            <span style={{ fontSize: '15px', cursor: 'pointer' }}>Departments</span>
                            <div className='dropdown-content'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li><a href="#">CSE</a></li>
                                    <li><a href="#">IT</a></li>
                                </ul>
                            </div>
                        </div>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <div className="sidebar">
                    <h3>Locations</h3>
                    <ul>
                        <li>
                            <a href="/hyderabad">Hyderabad</a>
                        </li>
                        <li>
                            <a href="/bhimavaram">Bhimavaram</a>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <img src="/vishnu.jpg" alt="Vishnu Educational Society" style={{ width: '80%', maxWidth: '600px', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;
