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
      clicked: false,
    },
    {
      name: 'Adiphoto',
      source: adiphoto,
      clicked: false,
    },
    {
      name: 'Giaoccino',
      source: giaoccino,
      clicked: false,
    },
    {
      name: 'Glowina',
      source: glowina,
      clicked: false,
    },
    {
      name: 'Golanger',
      source: golanger,
      clicked: false,
    },
    {
      name: 'Mclizee',
      source: Mclizee,
      clicked: false,
    },
    {
      name: 'Nikeael',
      source: nikeael,
      clicked: false,
    },
    {
      name: 'Nikeael',
      source: nikeael,
      clicked: false,
    },
    {
      name: 'Patootie',
      source: patootie,
      clicked: false,
    },
    {
      name: 'Rabbitee',
      source: rabbitee,
      clicked: false,
    },
    {
      name: 'Sushiami',
      source: sushiami,
      clicked: false,
    },
    {
      name: 'Techie',
      source: techie,
      clicked: false,
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
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </div>
  );
};

export default App;
