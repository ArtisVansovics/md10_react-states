import React, { FC } from 'react';
import './BlueBtn.scss';

type BlueBtnProps = {
  title: string
  onClick: () => void
}

const BlueBtn:FC<BlueBtnProps> = ({ title, onClick }) => (
  <div className="blue-btn" onClick={onClick}>
    {title}
  </div>
);

export default BlueBtn;
