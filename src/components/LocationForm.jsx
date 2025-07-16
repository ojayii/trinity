import React from 'react';

const LocationForm = () => {
  return (
    <form className="header-form">
      <div className="header-form__input-container">
        <input type="text" placeholder="Enter Location" />
      </div>
      <div className="header-form__input-container">
        <input type="date" />
        <input type="date" />
      </div>
      <div className="header-form__input-container">
        <select name="guests">
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default LocationForm;