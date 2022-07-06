import React, { useEffect, useState } from 'react';
import Coin from './Coin';
import './Coins.css'

const Coins = () => {

    const [coins , setCoins] = useState([]);

    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => setCoins(data))
    },[])


    return (
      <div className="container">
        <h1 className="text-container">Available Crypto Currencies </h1>
        <h3 className="text-container">Total coins: {coins.length}</h3>
        <div className='all-coins' >
            {
                 coins.map((coin , index) => <Coin key={index} coin={coin}></Coin>)
            }
        </div>
      </div>
    );
};

export default Coins;