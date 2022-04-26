import React, { useState } from 'react';
import './InputBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <div className="input-box">
      <BlueBtn
        title="Show input text"
        onClick={() => {
          setInputVisible(true);
        }}
      />
      <div className="input-box__container">
        <input
          className="input"
          type="text"
          placeholder="Your text here"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {inputVisible
          && (
            <h2 className="input-box__text">
              {inputValue}
            </h2>
          )}
      </div>
    </div>
  );
};

export default InputBox;
