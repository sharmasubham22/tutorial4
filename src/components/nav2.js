import '../App.css';
import React, {useState, useEffect} from 'react';
import logo from '../images/ds.png';
import { Link } from 'react-router-dom';

function Nav2() {

  const [toggleMenu, setToggleMenu] = useState(false)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])

    return (
      <div className='nav2'>
      <nav>
      <div class="logo">
            <img className="logo" src={logo} alt="Logo"/>
            </div>
         {(toggleMenu || screenWidth > 500) && (
          
      <ul className="list2">
          <li className="items">HOME</li>
          <li className="items">BLOGS</li>
          <Link className="nav-a" to="/"><li className="items">PRODUCT CATALOGUE</li></Link>
          <li className="items">EVENTS</li>
          <li className="items">REVIEWS</li>
          <li className="items"> VIEW PROFILE</li>
          
        </ul>
        )}
        <button onClick={toggleNav} className="btn">&#9776;</button>
    </nav>
    </div>
    );
  }
  
  export default Nav2;