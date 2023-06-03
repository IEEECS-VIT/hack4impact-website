import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown-danger' : 'countdown'}>
      <div class='box'>
        <p>{value}</p>
      </div>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
