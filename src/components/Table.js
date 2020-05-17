import React from "react";

const Table = (props) => (
  <table className="table table-striped table-dark">
    <thead className="thead-dark">
      <tr>
        <th>Location</th>
        <th>Confirmed</th>
        <th>Recovered</th>
        <th>Deaths</th>
        <th>New</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map((result, index) => {
        return (
          <tr key={index}>
            <td>{result["Country_text"]}</td>

            {result["Total Cases_text"] ? (
              <td>{result["Total Cases_text"]}</td>
            ) : (
              <td></td>
            )}

            {result["Total Recovered_text"] ? (
              <td>{result["Total Recovered_text"]}</td>
            ) : (
              <td></td>
            )}

            {result["Total Recovered_text"] ? (
              <td>{result["Total Recovered_text"]}</td>
            ) : (
              <td></td>
            )}

            {result["New Cases_text"] ? (
              <td>{result["New Cases_text"]}</td>
            ) : (
              <td></td>
            )}

            {result["Active Cases_text"] ? (
              <td>{result["Active Cases_text"]}</td>
            ) : (
              <td></td>
            )}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Table;
