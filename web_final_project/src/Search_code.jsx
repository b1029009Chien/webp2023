import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { TableHead, TableRow, TableCell, TextField, Box, TablePagination} from "@mui/material";

const SearchCode = () => {
  const [postcode, setPostCode] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const jsonData = require("./data.json");
    setData(jsonData);
  }, []);

  useEffect(() => {
    const filteredData = data.filter(row => {
      const postcodeMatch = !postcode.length || (postcode.length && row.Zip5 === postcode);
      return postcodeMatch;
    });
    setFilteredData(filteredData);
    setPage(0); // Reset the page when the data changes
  }, [postcode, data]);

  const handleChange = (event) => {
    setPostCode(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          label="PostCode"
          id="outlined-basic"
          type="text"
          placeholder="Enter PostCode"
          value={postcode}
          onChange={handleChange}
        />
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
              {!postcode.length ? null : filteredData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row, index) => (
                <tr key={index}>
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
      </Box>
    </div>
  );
};

export default SearchCode;