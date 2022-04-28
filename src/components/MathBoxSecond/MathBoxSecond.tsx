import React, { useState } from 'react';
import './MathBoxSecond.scss';
import MathBox from '../MathBox/MathBox';
import SmallBtn from '../SmallBtn/SmallBtn';

const MathBoxSecond = () => {
  const [count, setCount] = useState(0);
  const buttonsSecond = [
    {
      title: 'Reset',
      onClick: () => {
        setCount(0);
      },
    },
    {
      title: '+',
      onClick: () => {
        setCount(count + 10);
      },
    },
    {
      title: '-',
      onClick: () => {
        setCount(count - 10);
      },
    },
    {
      title: 'x',
      onClick: () => {
        setCount(count * 10);
      },
    },
    {
      title: '/',
      onClick: () => {
        setCount(count / 10);
      },
    },
  ];

  return (
    <MathBox>
      {buttonsSecond.map(({ title, onClick }) => (
        <SmallBtn key={title} title={title} onClick={onClick} />
      ))}
      <p>
        {count}
      </p>
    </MathBox>
  );
};

export default MathBoxSecond;
