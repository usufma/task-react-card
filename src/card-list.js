
import React, { Component } from 'react';
import Card from './task-card';
import cardData from './card -data';

class CardList extends Component {
  render() {
    return (
      <div className="card-lis">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  }
}

export default CardList;
