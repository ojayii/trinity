import React from 'react';

const RoomFilters = ({ onSearchChange, onTypeChange }) => {
  return (
    <form className="header-form">
      <div className="header-form__input-container">
        <input 
          className="room-search-input" 
          type="text" 
          placeholder="Search for rooms..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="header-form__input-container">
        <select 
          className="room-select-input" 
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Resort">Resort</option>
          <option value="Hotel">Hotel</option>
          <option value="Cottage">Cottage</option>
        </select>
      </div>
    </form>
  );
};

export default RoomFilters;