import React, { useState } from 'react';
import './PizzaBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

const PizzaBox = () => {
  const [pizza, setPizza] = useState(0);

  return (
    <div className="pizza-box">
      <BlueBtn
        title="Add 'pizza'"
        onClick={() => {
          setPizza(pizza + 1);
        }}
      />
      <p className="pizza-box__text">
        {`I like: ${' pizza'.repeat(pizza)}`}
      </p>
    </div>
  );
};

export default PizzaBox;
