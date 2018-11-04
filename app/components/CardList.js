import React, { Component } from "react";
import propTypes from "prop-types";

class CardList extends Component {
  static propTypes = {
    deck: propTypes.array.isRequired
  };

  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <ul>
            {this.props.deck.map(card => (
              <li key={card.name}>
                <div className="list-items">
                  <h4>{card.name}</h4>
                  {card.family ? (
                    <p>{card.family}</p>
                  ) : card.level ? (
                    <p>{card.level}</p>
                  ) : (
                    <p>{card.card_type}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CardList;
