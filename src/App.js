import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import eatalot from './images/eatalot.png';
import adiphoto from './images/adiphoto.png';
import giaoccino from './images/giaoccino.png';
import glowina from './images/glowina.png';
import golanger from './images/golanger.png';
import Mclizee from './images/Mclizee.png';
import nikeael from './images/nikeael.png';
import patootie from './images/patootie.png';
import rabbitee from './images/rabbitee.png';
import sushiami from './images/sushiami.png';
import techie from './images/techie.png';
import shuffle from './shuffle';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    {
      name: 'Eatalot',
      source: eatalot,
    },
    {
      name: 'Adiphoto',
      source: adiphoto,
    },
    {
      name: 'Giaoccino',
      source: giaoccino,
    },
    {
      name: 'Glowina',
      source: glowina,
    },
    {
      name: 'Golanger',
      source: golanger,
    },
    {
      name: 'Mclizee',
      source: Mclizee,
    },
    {
      name: 'Nikeael',
      source: nikeael,
    },
    {
      name: 'Nikeael',
      source: nikeael,
    },
    {
      name: 'Patootie',
      source: patootie,
    },
    {
      name: 'Rabbitee',
      source: rabbitee,
    },
    {
      name: 'Sushiami',
      source: sushiami,
    },
    {
      name: 'Techie',
      source: techie,
    },
  ]);

  shuffle(cards);

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <Main
        cards={cards}
        setCards={setCards}
        score={score}
        setScore={setScore}
      />
      <Footer />
    </div>
  );
};

export default App;
