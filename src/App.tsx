import React from 'react';
import './App.scss';
import MathBoxFirst from './components/MathBoxFirst/MathBoxFirst';
import MathBoxSecond from './components/MathBoxSecond/MathBoxSecond';
import PizzaBox from './components/PizzaBox/PizzaBox';
import SquareBox from './components/SquareBox/SquareBox';

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
      <div className="col-xs-6">
        <div className="box" />
      </div>
    </div>
  </div>
);

export default App;
