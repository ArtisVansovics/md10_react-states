import React, { useState } from 'react';
import './CardBox.scss';
import BlueBtn from '../BlueBtn/BlueBtn';
import Card from '../Card/Card';

const initialCards = [
  {
    idCard: 1,
    title: 'First card',
    cardKey: 'card_01',
  },
  {
    idCard: 2,
    title: 'Second card',
    cardKey: 'card_02',
  },
  {
    idCard: 3,
    title: 'Third card',
    cardKey: 'card_03',
  },
  {
    idCard: 4,
    title: 'Fourth card',
    cardKey: 'card_04',
  },
  {
    idCard: 5,
    title: 'Fifth card',
    cardKey: 'card_05',
  },
  {
    idCard: 6,
    title: 'Sixth card',
    cardKey: 'card_06',
  },
];

const CardBox = () => {
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
        setCards(cards.map((card) => (
          { ...card, title: card.title.toUpperCase() }
        )));
      },
    },
  ];

  return (
    <div className="card-box">
      <div className="card-box__row">
        {buttonsCards.map(({ title, onClick }) => (
          <BlueBtn key={title} title={title} onClick={onClick} />
        ))}
      </div>
      <div className="card-box__row">
        {[cards.map(({
          idCard, title, cardKey,
        }) => (
          <Card key={cardKey} idCard={idCard} title={title} allCards={cards} removeCard={setCards} cardKey={cardKey} />
        ))]}
      </div>
    </div>
  );
};

export default CardBox;
