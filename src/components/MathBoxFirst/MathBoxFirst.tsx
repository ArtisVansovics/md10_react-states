import React, { useState } from 'react';
import './MathBoxFirst.scss';
import MathBox from '../MathBox/MathBox';
import SmallBtn from '../SmallBtn/SmallBtn';

const MathBoxFirst = () => {
  const [count, setCount] = useState(0);
  const buttonsFirst = [
    {
      title: 'Reset',
      onClick: () => {
        setCount(0);
      },
    },
    {
      title: '+',
      onClick: () => {
        setCount(count + 1);
      },
    },
    {
      title: '-',
      onClick: () => {
        setCount(count - 1);
      },
    },
  ];

  return (
    <MathBox>
      {buttonsFirst.map(({ title, onClick }) => (
        <SmallBtn title={title} onClick={onClick} />
      ))}
      <p>
        {count}
      </p>
    </MathBox>
  );
};

export default MathBoxFirst;
