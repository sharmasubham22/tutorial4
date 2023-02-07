import '../App.css';
import React, { useState }  from 'react';
// import Navbar from './navbar';
import Test from './test';
import Mobiles from './mobile'
import Nav2 from './nav2';
import Footer from './footer';
import { Link } from 'react-router-dom';


function ProdCateg() {

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
        <div className="cat-list">
            <p className='heading'>MOBILE PHONES</p>
            <Mobiles/>
            <Mobiles/>
       </div>
        </div>
        <Footer/>
     </div>
     
    );
  }
  
  export default ProdCateg;