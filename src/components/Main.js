import React from 'react';
import Card from './Card';
import eatalot from '../images/eatalot.png';
import adiphoto from '../images/adiphoto.png';
import giaoccino from '../images/giaoccino.png';
import glowina from '../images/glowina.png';
import golanger from '../images/golanger.png';
import Mclizee from '../images/Mclizee.png';
import nikeael from '../images/nikeael.png';
import patootie from '../images/patootie.png';
import rabbitee from '../images/rabbitee.png';
import sushiami from '../images/sushiami.png';
import techie from '../images/techie.png';

const Main = () => {
  return (
    <div className="main">
      <Card source={eatalot} name="Eatalot" />
      <Card source={adiphoto} name="AdiPhoto" />
      <Card source={giaoccino} name="Giaoccino" />
      <Card source={glowina} name="Glowina" />
      <Card source={golanger} name="Golanger" />
      <Card source={Mclizee} name="Mclizee" />
      <Card source={patootie} name="Patootie" />
      <Card source={rabbitee} name="Rabbitee" />
      <Card source={sushiami} name="Sushiami" />
      <Card source={techie} name="Techie" />
      <Card source={nikeael} name="Nikeael" />
      <Card source={eatalot} name="Eatalot" />
    </div>
  );
};

export default Main;
