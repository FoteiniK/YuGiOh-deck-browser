import React, { Component } from "react";
import CardList from "./CardList";

class Main extends Component {
  state = {
    deck: [],
    isError: false,
    errorFetch: ""
  };
  componentDidMount() {
    this.fetchCardData();
  }

  fetchCardData = () => {
    let apiUrl = "http://52.57.88.137/api/card_data/";
    const deckNames = [
      "Burial from a Different Dimension",
      "Charge of the Light Brigade",
      "Infernoid Antra",
      "Infernoid Attondel",
      "Infernoid Decatron",
      "Infernoid Devyaty",
      "Infernoid Harmadik",
      "Infernoid Onuncu",
      "Infernoid Patrulea",
      "Infernoid Pirmais",
      "Infernoid Seitsemas",
      "Lyla, Lightsworn Sorceress",
      "Monster Gate",
      "One for One",
      "Raiden, Hand of the Lightsworn",
      "Reasoning",
      "Time-Space Trap Hole",
      "Torrential Tribute",
      "Upstart Goblin",
      "Void Seer"
    ];
    let dataArray = [];

    Promise.all(
      deckNames.map(request => {
        return fetch(`${apiUrl}${request}`)
          .then(response => {
            if (!response.ok) {
              this.setState({
                isError: true,
                errorFetch:
                  "Sorry,there was a problem while loading the cards' data from yu-gi-oh API.Please try again later.Check JavaScript developer console for more info."
              });
              throw response;
            }
            return response.json(); //we only get here if there is no error
          })
          .then(response => {
            dataArray.push(response.data);
            return dataArray;
          })
          .then(dataArray => this.setState({ deck: dataArray }));
      })
    ).catch(err => {
      throw err;
    });
  };
  render() {
    return (
      <div>
        {console.log(this.state.deck)}
        <div className="container">
          <CardList deck={this.state.deck} />
          <div className="card-image">
            <img
              src="http://52.57.88.137/api/card_image/Infernoid%20Antra"
              alt="card name"
            />
          </div>
          <div className="content">
            <div className="main-content">[[ DETAILS ]]</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
