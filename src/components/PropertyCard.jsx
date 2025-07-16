import React from 'react';

const PropertyCard = ({ type, image }) => {
  return (
    <div className="browse__card">
      <span>{type}</span>
      <a href="#" className="hover">
        <img 
          className="hover-outline" 
          src={`/${image}`} 
          alt={`Browse ${type}`} 
        />
      </a>
    </div>
  );
};

export default PropertyCard;