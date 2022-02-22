import React from 'react';
import shuffle from '../shuffle';

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.setScore(props.score + 1)}>
      <img src={props.source} alt="card" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
