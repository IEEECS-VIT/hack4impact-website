import React from 'react';
import './landing.css';
import logo from './Shape.svg';

const landing = () => {
  return <div>
    <div class="titleclass">
      <h1 class="title">HACK 4 IMPACT <span class="titleYear">2023</span></h1>
    </div>
    
  <nav id="navbar" class="navigation" role="navigation">
  <input id="toggle1" type="checkbox" style={{ display: 'none' }} />
    <label class="hamburger1" for="toggle1">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>
  
    <nav class="menu1">
      <a class="link1" href="#about">ABOUT</a>
      <a class="link1" href="#sponsors">SPONSORS</a>
      <a class="link1" href="#organizers">ORGANIZERS</a>
      <a class="link1" id="faq" href="#faq">FAQ</a>
    </nav>
</nav>
    
    <div class="logodiv">
      <img class="logo" src={logo} alt="shape"/>
    </div>
    <div class="parenttxt">
      <p class="empowertxt">Empowering Minds & Igniting Changes</p>
    </div>
    <div class="count"></div>
    <div class="btndiv">
      <button class="btn" type="button">Register Now</button>
    </div>
  </div>;
};

export default landing;
