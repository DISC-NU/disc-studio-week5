import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    if (number % 9 == 0 && number != 0) {
      alert("This number is divisible by 9");
    }
  },[number])

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
        <div onClick={() => {setNumber(number + 1)}} className="plus">+</div>
        <div onClick={() => {setNumber(number - 1)}} className="minus">-</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="reset" onClick={() => {setNumber(0)}}>Reset</div>
    </div>
  );
}

export default App;
