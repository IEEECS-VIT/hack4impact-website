import React from 'react';
import './landing.css';
import logo from './Shape.svg';
import Countdown from '../countdown/countdown';

const landing = () => {
  const time = new Date('June 6, 2023 13:00:00').getTime();
  const HandleRedirect = () => {
    window.open('https://vtop.vit.ac.in/vtop/login', '_blank');
  };

  return (
    <div>
      <div>
        <h1 class='title'>
          HACK 4 IMPACT <span class='titleYear'>2023</span>
        </h1>
      </div>
      <div class='navbar'>
        <a class='nav' href='#about'>
          ABOUT
        </a>
        <a class='nav' href='#sponsosrs'>
          SPONSORS
        </a>
        <a class='nav' href='#organizers'>
          ORGANIZERS
        </a>
        <a class='nav' href='#faq'>
          FAQ
        </a>
      </div>
      <div class='logodiv'>
        <img class='logo' src={logo} alt='shape' />
      </div>
      <div class='parenttxt'>
        <p class='empowertxt'>Empowering Minds & Igniting Changes</p>
      </div>
      <div>
        <Countdown targetDate={time} />
      </div>
      <div class='btndiv'>
        <button class='btn' type='button' onClick={HandleRedirect}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default landing;
