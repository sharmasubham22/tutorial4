import '../App.css';
import React  from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <>
        <footer>
  <p>DigiSoul: A Tech World</p>
  <p><Link className="foot-link" to="/">Blogs</Link> | 
  <Link className="foot-link" to="/"> Phones</Link> | 
  <Link className="foot-link" to="/"> Laptops</Link> | 
  <Link className="foot-link" to="/"> Accessories</Link> | 
  <Link className="foot-link" to="/"> Reviews</Link> | 
  <Link className="foot-link" to="/"> Events</Link></p>
  
</footer>
        </>
    );
}
    export default Footer;