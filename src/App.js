import React from 'react';
import Landing from './Components/landing/landing.js';
import Orgteam from './Components/orgteam/orgteam.js';
import { Element } from 'react-scroll';
import './App.css';

import Abouthack from './Components/about/about-hack.js';
import AboutVIT from './Components/about/about-vit.js';
import AboutYantra from './Components/about/about-yantra.js';
import './App.css';

const App = () => {
  return (
    <div>
      <Landing />
      <div style={{ marginTop: '15rem' }}>
        <AboutYantra />
        <Abouthack />
      </div>
      <div style={{ marginTop: '15rem' }}>
        <Orgteam />
      </div>
    </div>
  );
};

export default App;
