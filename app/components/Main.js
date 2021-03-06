import React, { Component } from "react";
import CardList from "./CardList";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

class Main extends Component {
  state = {
    deck: [],
    isError: false,
    errorFetch: "",
    selectedCard: "",
    text: ""
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
    //Using Promise.all to make multiple fetch requests. Data is pushed to state's deck array
    Promise.all(
      deckNames.map(request => {
        return fetch(`${apiUrl}${request}`)
          .then(response => {
            //handle response errors
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
  selectCard = (name, text) => {
    this.setState({ selectedCard: name, text });
  };
  render() {
    return (
      <div>
        <div className="container">
          <CardList deck={this.state.deck} selectCard={this.selectCard} />
          <CardImage selectedCard={this.state.selectedCard} />
          <CardDetails
            selectedCard={this.state.selectedCard}
            text={this.state.text}
          />
        </div>
      </div>
    );
  }
}

export default Main;
