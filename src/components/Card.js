import React from 'react';
import shuffle from '../shuffle';

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={() => {
        if (!props.cards[props.index].clicked) {
          props.cards[props.index].clicked = true;
          props.setScore(props.score + 1);
        } else {
          if (props.bestScore < props.score) {
            props.setBestScore(props.score);
          }
          props.setScore(0);
        }
      }}
    >
      <img src={props.source} alt="card" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
