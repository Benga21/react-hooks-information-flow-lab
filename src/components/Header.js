import React from 'react';
import PropTypes from 'prop-types'; 

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}
Header.propTypes = {
  onDarkModeClick: PropTypes.func.isRequired,
};

export default Header;

