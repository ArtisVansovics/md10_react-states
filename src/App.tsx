import React from 'react';
import './App.scss';
import MathBoxFirst from './components/MathBoxFirst/MathBoxFirst';
import MathBoxSecond from './components/MathBoxSecond/MathBoxSecond';
import PizzaBox from './components/PizzaBox/PizzaBox';
import SquareBox from './components/SquareBox/SquareBox';
import PressedBox from './components/PressedBox/PressedBox';
import InputBox from './components/InputBox/InputBox';
import NumberBox from './components/NumberBox/NumberBox';

const App = () => (
  <div className="container">
    {/* First counter */}
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <MathBoxFirst />
        </div>
      </div>
    </div>
    {/* Second counter */}
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <MathBoxSecond />
        </div>
      </div>
    </div>
    {/* Pizza counter */}
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <PizzaBox />
        </div>
      </div>
    </div>
    <div className="row">
      {/* Square color counter */}
      <div className="col-xs-6">
        <div className="box">
          <SquareBox />
        </div>
      </div>
      {/* Change text to "Pressed" */}
      <div className="col-xs-6">
        <div className="box">
          <PressedBox />
        </div>
      </div>
    </div>
    {/* Show input */}
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <InputBox />
        </div>
      </div>
    </div>
    {/* Change array */}
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <NumberBox />
        </div>
      </div>
    </div>
  </div>
);

export default App;
