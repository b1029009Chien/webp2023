import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { TableHead, TableRow, TableCell, TextField, Box, TablePagination} from "@mui/material";

const Search = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [road, setRoad] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const jsonData = require("./data.json");
    setData(jsonData);
  }, []);

  useEffect(() => {
    const filteredData = data.filter(row => {
      return (
        (!city || row.City.toLowerCase() === city.toLowerCase()) &&
        (!district || row.Area === district) &&
        (!road || row.Road === road)
      );
    });
    setFilteredData(filteredData);
    setPage(0); // Reset the page when the data changes
  }, [city, district, road, data]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleRoadChange = (event) => {
    setRoad(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderTable = () => {
    if (!city) {
      return null;
    }

    const rowsToDisplay = filteredData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    return (
      <div>
        <Table striped bordered hover>
          <TableHead>
            <TableRow>
              <TableCell>Zip(3+2)</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Road</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {rowsToDisplay.map((row) => (
              <tr key={row.Road}>
                <td>{row.Zip5}</td>
                <td>{row.City}</td>
                <td>{row.Area}</td>
                <td>{row.Road}</td>
                <td>{row.Scope}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
  };

  return (
    <div>
      <Box
        textAlign= "center"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="City"
          id="outlined-basic"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="District"
          placeholder="Enter District"
          value={district}
          onChange={handleDistrictChange}
        />
        <TextField
          id="outlined-basic"
          label="Road"
          placeholder="Enter Road"
          value={road}
          onChange={handleRoadChange}
        />
        {renderTable()}
      </Box>
    </div>
  );
};

export default Search;
