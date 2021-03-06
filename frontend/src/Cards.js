import React, { Component } from 'react';
import Card from './Card';
import Slip from 'slipjs';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.onSwipe = function(event) {
      const card = this.props.card;
      props.onSwipe(card, event);
    }
  }

  componentDidMount() {
    this.slip = new Slip(this.element);
    this.element.addEventListener('slip:beforereorder', (event) => {
      event.preventDefault();
    });
  }

  componentWillUnmount() {
    this.slip.detach();
  }

  render() {
    return (
      <div ref={(element) => this.element = element} className='cards'>
        {this.props.cards.map(card =>
          <Card
            card={card}
            key={card.id}
            onSwipe={this.onSwipe}
            onBeforeSwipe={this.props.onBeforeSwipe} />
        )}
      </div>
    );
  }
}

export default Cards;
