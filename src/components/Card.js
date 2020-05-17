import React from "react";

function Card({ items }) {
  return (
    <div className="card-list">
      <div className="card total">
        <div className="title">
          <h2>GLOBAL CORONAVIRUS INFECTIONS</h2>
          <span className="total">
            <i className="fas fa-stethoscope"></i>
          </span>
        </div>
        <h1>
          {items["Total Cases_text"]}
          <span className="new-total">{items["New Cases_text"]}</span>
        </h1>
        <p>
          The total amount of people that have globally been diagnosed with the
          coronavirus
        </p>
      </div>
      <div className="card deaths">
        <div className="title">
          <h2>TOTAL DEATHS</h2>
          <span className="deaths">
            <i className="fas fa-skull-crossbones"></i>
          </span>
        </div>
        <h1>
          {items["Total Deaths_text"]}
          <span className="new-deaths">{items["New Deaths_text"]}</span>
        </h1>
        <p>The total amount of infected people that died</p>
      </div>
      <div className="card active">
        <div className="title">
          <h2>CURRENTLY INFECTED</h2>
          <span className="active">
            <i className="fas fa-first-aid"></i>
          </span>
        </div>
        <h1>{items["Active Cases_text"]}</h1>
        <p>The total amount of infected people that are still sick</p>
      </div>
      <div className="card recovered">
        <div className="title">
          <h2>TOTAL RECOVERED</h2>
          <span className="recovered">
            <i className="far fa-heart"></i>
          </span>
        </div>
        <h1>{items["Total Recovered_text"]}</h1>
        <p>The total amount of infected people that have recovered</p>
      </div>
    </div>
  );
}

export default Card;
