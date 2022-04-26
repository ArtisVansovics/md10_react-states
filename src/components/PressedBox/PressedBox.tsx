import React, { useState } from 'react';
import './PressedBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

const PressedBox = () => {
  const [press, setPress] = useState(0);

  return (
    <div className="pressed-box">
      <BlueBtn
        title="Change text to 'Pressed'"
        onClick={() => {
          setPress(press + 1);
        }}
      />
      <div className="pressed-box__text-container">
        <p className="pressed-box__text">
          {(press > 0) ? 'Pressed' : 'Not pressed'}
        </p>
      </div>
    </div>
  );
};

export default PressedBox;
