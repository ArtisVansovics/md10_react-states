import React, { FC } from 'react';
import './MathBox.scss';

const MathBox:FC = ({ children }) => (
  <div className="math-box">
    {children}
  </div>
);

export default MathBox;
