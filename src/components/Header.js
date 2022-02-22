import React from 'react';
import headerLogo from '../images/header-logo.png';

const Header = () => {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="header-score">
        <p>Current Score:</p>
        <p>Best Score:</p>
      </div>
    </div>
  );
};

export default Header;
