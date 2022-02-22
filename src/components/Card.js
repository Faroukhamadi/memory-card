import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.source} alt="card" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
