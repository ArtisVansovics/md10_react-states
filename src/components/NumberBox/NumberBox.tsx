import React, { useState } from 'react';
import './NumberBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';

const NumberBox = () => {
  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [numbers, setNumbers] = useState([...numberArr]);
  const buttonsNumb = [
    {
      title: 'Remove from end',
      onClick: () => {
        setNumbers(numbers.slice(0, -1));
      },
    },
    {
      title: 'Remove from start',
      onClick: () => {
        setNumbers(numbers.slice(1));
      },
    },
    {
      title: 'Reset',
      onClick: () => {
        setNumbers([...numberArr]);
      },
    },
    {
      title: 'Remove all',
      onClick: () => {
        setNumbers([]);
      },
    },
    {
      title: 'Show > 5',
      onClick: () => {
        setNumbers(numbers.filter(((number) => number > 5)));
      },
    },
    {
      title: 'All numbers x2',
      onClick: () => {
        setNumbers(numbers.map((number) => (
          number * 2
        )));
      },
    },
    {
      title: 'All numbers / 10',
      onClick: () => {
        setNumbers(numbers.map((number) => (
          number / 10
        )));
      },
    },
  ];

  return (
    <div className="number-box">
      <div className="number-box__row">
        {buttonsNumb.map(({ title, onClick }) => (
          <BlueBtn title={title} onClick={onClick} />
        ))}
      </div>
      <div className="number-box__row">
        {numbers.map((number) => (
          <div className="number-box__card">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberBox;
