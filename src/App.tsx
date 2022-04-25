import React from 'react';
import './App.scss';
import MathBoxFirst from './components/MathBoxFirst/MathBoxFirst';
import MathBoxSecond from './components/MathBoxSecond/MathBoxSecond';
import PizzaBox from './components/PizzaBox/PizzaBox';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <MathBoxFirst />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <MathBoxSecond />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <PizzaBox />
        </div>
      </div>
    </div>
  </div>
);

export default App;
