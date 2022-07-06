import React from 'react';
import { useNavigate } from 'react-router';


const Coin = ({coin}) => {

  const navigate = useNavigate();
    
    const { id, name, image, symbol } = coin; 
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid  skyblue",
          padding: "6px 26px",
          borderRadius: "10px",
          marginTop: "20px",
          cursor: "pointer",
        }}
        className="container"
        onClick={()=>navigate(`/coins/${id}`)}
      >
          <img
            style={{ width: "80px", height: "80px", marginRight: "60px" }}
            src={image}
            alt=""
            srcset=""
          />
          <div>
            <h3>{name}</h3>
            <p>{symbol}</p>
          </div>
      </div>
    );
};

export default Coin;