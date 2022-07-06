import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './CoinDetails.css';

const CoinDetails = () => {

    const { id } = useParams();

    const [coin , setCoin] = useState({});
    // console.log(coin);

    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data))
    },[id])

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="container"
      >
        <div>
          <h1 className="text-design">General Info :</h1>
          <p>Coin Name: {coin.name}</p>
          <p> Market Cap Rank: {coin.market_cap_rank}</p>
          <p>
            Origin:
            {coin.community_data?.country_origin
              ? coin.community_data?.country_origin
              : "Not Available"}
          </p>
          <p>Contract Address:</p>
          <p>Hashing Algorithm:</p>
          <p>Genesis Date:</p>
          <p>Last Updated: {coin.last_updated} </p>
          <h1 className="text-design">Scores :</h1>
          <p>Community Score: {coin.community_score}</p>
          <p>Developer Score:{coin.developer_score}</p>
          <p>Liquidity Score: {coin.liquidity_score}</p>
          <p>Public Interest Score: {coin.public_interest_score}</p>
        </div>
        <div>
          <img style={{paddingRight : '150px'}} src={coin.image?.large} alt="" srcset="" />
        </div>
      </div>
    );
};

export default CoinDetails;