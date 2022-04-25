import React, { FC } from 'react';
import './SmallBtn.scss';

type SmallBtnProps = {
  title: string
  onClick: () => void
}

const SmallBtn:FC<SmallBtnProps> = ({ title, onClick }) => (
  <div className="small-btn" onClick={onClick}>
    {title}
  </div>
);

export default SmallBtn;
