import React from 'react';
import './sponsors.css';
import cblocks from './cblocks.svg';
import bluelearn from './bluelearn.svg';

const sponsors = () => {
  return (
    <div id='sponsors'>
      <div class='heading'>
        Spon<span class='point'>sors</span>
      </div>
      <hr class='sline' />
      <div class='sponsordiv'>
        <img class='blogo slogo' src={bluelearn} alt='shape' />
        <img class='clogo slogo' src={cblocks} alt='shape' />
      </div>
    </div>
  );
};
export default sponsors;
