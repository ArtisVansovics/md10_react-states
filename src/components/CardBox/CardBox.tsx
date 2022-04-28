import React, { useState } from 'react';
import './CardBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';
import Card from '../Card/Card';

const CardBox = () => {
  const initialCards = [
    {
      idCard: 1,
      title: 'First card',
      key: 'card_01',
    },
    {
      idCard: 2,
      title: 'Second card',
      key: 'card_02',
    },
    {
      idCard: 3,
      title: 'Third card',
      key: 'card_03',
    },
    {
      idCard: 4,
      title: 'Fourth card',
      key: 'card_04',
    },
    {
      idCard: 5,
      title: 'Fifth card',
      key: 'card_05',
    },
    {
      idCard: 6,
      title: 'Sixth card',
      key: 'card_06',
    },
  ];
  const [cards, setCards] = useState([...initialCards]);
  const buttonsCards = [
    {
      title: 'Reset',
      onClick: () => {
        setCards([...initialCards]);
      },
    },
    {
      title: 'Remove all',
      onClick: () => {
        setCards([]);
      },
    },
    {
      title: 'Make all titles UPPERCASE',
      onClick: () => {
        setCards([...cards.map(({
          idCard, title, key,
        }) => (
          {
            idCard, key, title: title.toUpperCase(),
          }
        ))]);
      },
    },
  ];

  return (
    <div className="card-box">
      <div className="card-box__row">
        {buttonsCards.map(({ title, onClick }) => (
          <BlueBtn title={title} onClick={onClick} />
        ))}
      </div>
      <div className="card-box__row">
        {[...cards.map(({
          idCard, title, key,
        }) => (
          <Card key={key} idCard={idCard} title={title} allCards={cards} removeCard={setCards} />
        ))]}
      </div>
    </div>
  );
};

export default CardBox;
