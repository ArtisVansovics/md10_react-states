import React, { useState } from 'react';
import './SquareBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

const SquareBox = () => {
  const [color, setColor] = useState(0);
  const squareColors = ['#0D43FF', '#FF4B19', '#00BFFF', '#FFC219', '#0DFFB7'];

  return (
    <div className="square-box">
      <BlueBtn
        title="Change square color"
        onClick={() => {
          setColor(color + 1);
        }}
      />
      <div
        className="square-box__square"
        style={{ backgroundColor: squareColors[color % 5] }}
      />
    </div>
  );
};

export default SquareBox;
