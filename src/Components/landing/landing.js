import React from 'react';
import './landing.css';
import logo from './Shape.svg';
import { Link } from 'react-scroll';
import Countdown from '../countdown/countdown';

const landing = () => {
  const time = new Date('June 6, 2023 9:00:00').getTime();
  const HandleRedirect = () => {
    window.open('https://vtop.vit.ac.in/vtop/login', '_blank');
  };

  return (
    <div class='landing'>
      <div class='titlenav'>
        <div class='titleclass'>
          <h1 class='title'>
            HACK 4 IMPACT <span class='titleYear'>2023</span>
          </h1>
        </div>

        <nav id='navbar' class='navigation' role='navigation'>
          <input id='toggle1' type='checkbox' style={{ display: 'none' }} />
          <label class='hamburger1' for='toggle1'>
            <div class='top'></div>
            <div class='meat'></div>
            <div class='bottom'></div>
          </label>

          <nav class='menu1'>
            <Link class='link1' to='about' smooth={true} duration={500}>
              ABOUT
            </Link>
            <Link class='link1' to='timeline' smooth={true} duration={500}>
              TIMELINE
            </Link>
            <Link class='link1' to='sponsors' smooth={true} duration={500}>
              SPONSORS
            </Link>
            <Link class='link1' to='org' smooth={true} duration={500}>
              ORGANIZERS
            </Link>
            <Link class='link1' to='faq' smooth={true} duration={500}>
              FAQ
            </Link>
          </nav>
        </nav>
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
