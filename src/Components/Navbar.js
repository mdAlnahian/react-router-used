import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div>
            <h2 style={{color : 'gray'}}>Crypto Cafe </h2>
          </div>
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/coins'>Coins</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;