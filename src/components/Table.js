import React from "react";

const Table = (props) => (
  <div className="table-wrap">
    <table className="table table-striped table-light table-responsive">
      <thead className="thead-light">
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
  </div>
);

export default Table;
