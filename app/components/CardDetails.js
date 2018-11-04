import React from "react";

const CardDetails = props => {
  return (
    <div className="content">
      <div className="main-content">
        <div>
          {props.selectedCard ? (
            <h2>{props.selectedCard}</h2>
          ) : (
            <h1>Choose your card</h1>
          )}

          {props.text && (
            <p className="details">
              <em>{props.text}</em>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
