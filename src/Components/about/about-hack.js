import React from 'react';
import './about.css';

const abouthack = () => {
  return (
    <div>
      <h1 class='about'>
        HACK 4 <span class='point'>IMPACT</span>
      </h1>
      <hr class='underline' />
      <div class='main'>
        <p class='about-para'>
          <span class='point'>BIF</span> and <span class='point'>IEEE-CS</span>{' '}
          in collaboration presents Hack-4-impact an exhilarating{' '}
          <span class='point'>36-hour hackathon</span> focused on enhancing
          education quality! We are bringing together brilliant minds,
          educators, and tech enthusiasts to collaboratively address the
          pressing challenges in education.
        </p>
        <p class='about-para'>
          Participants will have the opportunity to develop innovative solutions
          that foster inclusivity, engagement, and personalized learning
          experiences. From designing interactive{' '}
          <span class='point'>e-learning platforms</span> to creating{' '}
          <span class='point'>AI-powered educational tools</span> , this
          hackathon will harness the power of technology to revolutionize
          education. Network with industry professionals, gain valuable
          insights, and compete for <span class='point'>exciting prizes</span>.
          Together, let's pave the way for a brighter future by transforming
          education and ensuring quality learning for all. Don't miss out on
          this incredible event!
        </p>
      </div>
    </div>
  );
};

export default abouthack;
