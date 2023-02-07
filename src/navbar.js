import './App.css';
import React from 'react';
import logo from './images/logo.gif';

function Navbar() {
    
    return (
        <div>
            <nav className='navbar'>
        <div class="logo">
            <img className="logo" src={logo} alt="Logo"/>
            </div>
            <div class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class='&rdquo;menu&rdquo'>
                <div class="menu">
                    <a href="/">HOME</a>
                    <a href="/">BLOG</a>
                    <a href="/">PRODUCT CATALOGUE</a>
                    <a href="/">EVENTS</a>
                    <a href="/">REVIEWS</a>
                    <div class="services" id="profile">
                        {/* <label for="profile" className='fas fa-user-alt'>&#xf2bb;</label> */}
                        <a href="/">MY PROFILE</a>
                        <div class="dropdown">
                            <a class="drop-link" href="/">View Profile</a>
                            <a class="drop-link" href="/">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </nav>
        </div>
        );
    }
    
    export default Navbar;