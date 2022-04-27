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
      show: true,
    },
    {
      idCard: 2,
      title: 'Second card',
      key: 'card_02',
      show: true,
    },
    {
      idCard: 3,
      title: 'Third card',
      key: 'card_03',
      show: true,
    },
    {
      idCard: 4,
      title: 'Fourth card',
      key: 'card_04',
      show: true,
    },
    {
      idCard: 5,
      title: 'Fifth card',
      key: 'card_05',
      show: true,
    },
    {
      idCard: 6,
      title: 'Sixth card',
      key: 'card_06',
      show: true,
    },
  ];
  const [cards, setCards] = useState([...initialCards]);
  const buttonsCards = [
    {
      title: 'Reset',
      onClick: () => {
        setCards([...initialCards.map(({
          idCard, title, key, show,
        }) => (
          {
            idCard, show, key: key.toUpperCase(), title,
          }
        ))]);
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
          idCard, title, key, show,
        }) => (
          {
            idCard, show, key, title: title.toUpperCase(),
          }
        ))]);
      },
    },
  ];
  console.log(cards);
  console.log(initialCards);

  return (
    <div className="card-box">
      <div className="card-box__row">
        {buttonsCards.map(({ title, onClick }) => (
          <BlueBtn title={title} onClick={onClick} />
        ))}
      </div>
      <div className="card-box__row">
        {[...cards.map(({
          idCard, title, show, key,
        }) => (
          <Card key={key} idCard={idCard} title={title} show={show} />
        ))]}
      </div>
    </div>
  );
};

export default CardBox;
