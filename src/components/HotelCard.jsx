import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ room }) => {
  return (
    <Link to={`/view/${room.id}`} className="hotel-card-link">
      <div className="hotel-card">
        <img 
          className="card-image hover-outline" 
          src={room.pictures[0]} 
          alt={room.title} 
        />
        <div className="info-container">
          <div className="title-col">
            <p className="card-title">{room.type}, {room.title}</p>
            <p className="card-info">
              <span>{room.roomCount} bedroom(s)</span>
              <span>214m</span>
            </p>
          </div>
          <div className="price-col">
            <p className="card-price">$ {room.price}</p>
            <p className="card-rate">per month</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;