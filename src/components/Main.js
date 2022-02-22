import React, { useState } from 'react';
import Card from './Card';
import shuffle from '../shuffle';

const Main = (props) => {
  const cards = props.cards.map((card, index) => (
    <Card
      key={index}
      name={card.name}
      source={card.source}
      cards={props.cards}
      setCards={props.setCards}
      score={props.score}
      setScore={props.setScore}
    />
  ));
  return <div className="main">{cards}</div>;
};
export default Main;
