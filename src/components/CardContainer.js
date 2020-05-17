import React, { Component } from "react";

import Card from "./Card.js";

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "b2bc1624b5msh3ad52de49143c83p1e916ajsnd74cb699465d",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            results: data[0],
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Card items={this.state.results} />
      </div>
    );
  }
}

export default CardContainer;
