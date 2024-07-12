import React, { useState } from 'react';
import Backspace from './others/backspace.png';
import PhoneCall from './AppsIcons/call.png';

function Call() {
  const [input, setInput] = useState('');

  const handleKeyPress = (value) => {
    setInput(input + value);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <section className='call__app'>
      <div className="call__app-field">
       <big> <b><span>{input}</span></b></big>
        <img className='backspace' src={Backspace} alt="Backspace" onClick={handleBackspace} />
      </div>

      <ul>
        <li onClick={() => handleKeyPress('1')}>1</li>
        <li onClick={() => handleKeyPress('2')}>2</li>
        <li onClick={() => handleKeyPress('3')}>3</li>
        <li onClick={() => handleKeyPress('4')}>4</li>
        <li onClick={() => handleKeyPress('5')}>5</li>
        <li onClick={() => handleKeyPress('6')}>6</li>
        <li onClick={() => handleKeyPress('7')}>7</li>
        <li onClick={() => handleKeyPress('8')}>8</li>
        <li onClick={() => handleKeyPress('9')}>9</li>
        <li onClick={() => handleKeyPress('*')}>*</li>
        <li onClick={() => handleKeyPress('0')}>0</li>
        <li onClick={() => handleKeyPress('#')}>#</li>
        <li></li>
        <li><img className='ul__call' src={PhoneCall} alt="Phone Call" /></li>
        <li></li>
      </ul>
    </section>
  );
}

export default Call;
