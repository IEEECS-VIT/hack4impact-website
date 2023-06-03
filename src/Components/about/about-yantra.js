import React from 'react';
import './about.css';

const aboutyantra = () => {
  return (
    <div>
      <h1 class='about' id='about'>
        About <span class='point'>Yantra</span>
      </h1>
      <hr class='underline' />
      <div class='main'>
        <p class='about-para'>
          We are excited to announce the launch of Yantra, an{' '}
          <span class='point'>innovative tech fest </span> hosted by VIT Vellore
          for the first time this year, representing a fresh chapter in our
          university’s journey of technological exploration and creativity.
          <p class='about-para'>
            Yantra will feature an array of engaging competitions, workshops,
            and interactive sessions, designed to challenge participants' skills
            and expand their knowledge across{' '}
            <span class='point'>various domains</span>. It will serve as a
            platform for students to showcase their talent, exchange ideas, and
            forge valuable connections with industry experts.
          </p>
        </p>
      </div>
    </div>
  );
};

export default aboutyantra;
