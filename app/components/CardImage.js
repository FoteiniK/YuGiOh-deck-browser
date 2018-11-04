import React, { Component } from "react";

class CardImage extends Component {
  state = {};

  render() {
    return (
      <div className="card-image">
        <img alt={this.props.selectedCard} />
      </div>
    );
  }
}

export default CardImage;
