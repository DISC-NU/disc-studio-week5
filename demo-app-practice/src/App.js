import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const number = 0; // HINT: You'll need to fix this

  return (
    <div className="App">
      <br></br>
      <div className="Banner">Here is a Simple React Counter!</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="MSG">The current number is:</div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="number">{number}</div>
      <br></br>
      <div className="Buttons">
        <div className="plus">+</div>
        <div className="minus">-</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="reset">Reset</div>
    </div>
  );
}

export default App;
