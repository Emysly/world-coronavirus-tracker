import React from "react";

import CardContainer from "./components/CardContainer";
import Table from "./components/Table";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
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
          this.setState(
            {
              results: data,
            },
            () => console.log(this.state.results)
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSearchSubmit = (e) => {
    let target = e.target.children[0].value;
    let dataArray = [];
    fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
        "x-rapidapi-key": "b2bc1624b5msh3ad52de49143c83p1e916ajsnd74cb699465d",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          this.setState(
            {
              input: target,
              results: data.filter((result) => {
                if (result["Country_text"]) {
                  result["Country_text"]
                    .toString()
                    .toLowerCase()
                    .includes(target.toLowerCase());
                }
              }),
            },
            () => console.log(this.state.results)
          );
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
          <CardContainer />
          <Search onSearch={this.onSearchSubmit} />
          <Table results={this.state.results} />
        </main>
      </div>
    );
  }
}

export default App;
