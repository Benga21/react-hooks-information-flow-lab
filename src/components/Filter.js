import React from 'react';
import PropTypes from 'prop-types'; 
function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
Filter.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Filter;

