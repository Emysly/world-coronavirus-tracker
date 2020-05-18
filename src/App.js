import React from "react";

import CardContainer from "./components/CardContainer";
import Table from "./components/Table";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      table: [],
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
            results: data,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSearchSubmit = (e) => {
    let target = e.target.children[0].value;
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${target}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "b2bc1624b5msh3ad52de49143c83p1e916ajsnd74cb699465d",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          this.setState({
            input: target,
            table: data.response,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CORONA VIRUS TRACKER</h1>
        </header>
        <main className="main">
          <p style={{ color: "red", textAlign: "center" }}>
            This statistics is not 100% accurate!!!
          </p>
          <Search onSearch={this.onSearchSubmit} />
          <Table results={this.state.table} />
          <CardContainer />
        </main>
      </div>
    );
  }
}

export default App;
