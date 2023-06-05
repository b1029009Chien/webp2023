import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ListCode = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require("./data.json");
    setData(jsonData);
  }, []);

  return (
    <div>
      <Table striped success hover>
        <thead>
          <tr>
            <th>Zip</th>
            <th>City</th>
            <th>Area</th>
            <th>Road</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key='{row.Zip5}{row.Road}'>
              <td>{row.Zip5}</td>
              <td>{row.City}</td>
              <td>{row.Area}</td>
              <td>{row.Road}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListCode;