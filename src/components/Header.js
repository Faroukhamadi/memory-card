import React from 'react';
import headerLogo from '../images/header-logo.png';

const Header = (props) => {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="header-score">
        <p>Current Score: {props.score}</p>
        <p>Best Score: {props.bestScore}</p>
      </div>
    </div>
  );
};

export default Header;
