import React from "react";

const Table = (props) => (
  <table className="table table-striped table-dark table-responsive">
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
            <td>{result.country}</td>

            {result.cases.total ? <td>{result.cases.total}</td> : <td></td>}

            {result.cases.recovered ? (
              <td>{result.cases.recovered}</td>
            ) : (
              <td></td>
            )}

            {result.deaths.total ? <td>{result.deaths.total}</td> : <td></td>}

            {result.cases.new ? <td>{result.cases.new}</td> : <td></td>}

            {result.cases.active ? <td>{result.cases.active}</td> : <td></td>}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default Table;
