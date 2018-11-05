import React from "react";
import PropTypes from "prop-types";

const CardImage = props => {
  let url = `http://52.57.88.137/api/card_image/${props.selectedCard}`;
  return (
    <div className="card-image">
      {props.selectedCard && <img src={url} alt={props.selectedCard} />}
    </div>
  );
};

CardImage.propTypes = {
  selectedCard: PropTypes.string.isRequired
};
export default CardImage;
