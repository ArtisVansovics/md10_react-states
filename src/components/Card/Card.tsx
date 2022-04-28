import React, { FC } from 'react';
import './Card.scss';

type CardProps = {
  idCard: number
  title: string
  cardKey: string
  allCards: {idCard: number, title: string, cardKey: string}[]
  removeCard: React.Dispatch<React.SetStateAction<{idCard: number, title: string, cardKey: string}[]>>
}

const Card:FC<CardProps> = ({
  title, idCard, cardKey, allCards, removeCard,
}) => (
  <div className="card" key={cardKey}>
    <p className="card__id">
      {`ID: ${idCard}`}
    </p>
    <p className="card__title">
      {`TITLE: ${title}`}
    </p>
    <button
      className="card__btn"
      onClick={() => {
        const filteredCards = allCards.filter((card) => (
          card.idCard !== idCard));
        removeCard(filteredCards);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-x-circle-fill card__icon-btn"
        viewBox="0 0 16 16"
      >
        <path
            // eslint-disable-next-line max-len
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
        />
      </svg>
    </button>
  </div>
);

export default Card;
