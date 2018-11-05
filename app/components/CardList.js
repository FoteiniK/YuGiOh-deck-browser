import React from "react";
import PropTypes from "prop-types";

const CardList = props => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          {props.deck.map(card => (
            <li
              key={card.name}
              onClick={() => {
                props.selectCard(card.name, card.text);
              }}
            >
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
};
CardList.proptypes = {
  deck: PropTypes.array.isRequired
};
export default CardList;
