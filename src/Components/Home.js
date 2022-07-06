import React from 'react';
import './Home.css'
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
      <div className="">
        <div className="home-container">
          <div>
            <h2 style={{ margin: '4px' }}>Welcome to CRYPTO CAFE ☕</h2>
            <div>
              <NavLink className="btn-center" to="/coins">
                Explore Coins
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;