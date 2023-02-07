import '../App.css';
import React, { useState }  from 'react';
// import Navbar from './navbar';
import Test from './test';
import Cards from './cards';
import Nav2 from './nav2';
import Footer from './footer';
import Mobiles from './mobile';
import { Link } from 'react-router-dom';

function ProdHome() {

    return (
     <div className='producthome'>
        <Nav2 />
        <div className='cc-align'>
       <div className='category'>
        <p className='c-list'>CATEGORIES</p>
                <div class="list">
                    <Link to="/category">Mobile Phones</Link>
                    <Link to="/category">Laptops</Link>
                    <Link to="/category">Televisions</Link>
                    <Link to="/category">Smartwatches</Link>
                    <Link to="/category">Cameras</Link>
                    <Link to="/category">Gaming Consoles</Link>
                    <Link to="/category">Desktops & Components</Link>
                    <Link to="/category">Accessories</Link>
                </div>
        </div>
        <Test/>
        </div>
        <p className='heading'>Featured Products</p>
        <Cards/>
        <p className='heading'>Top Mobile Phones</p>
        <Mobiles/>
        <Footer/>
     </div>
     
    );
  }
  
  export default ProdHome;