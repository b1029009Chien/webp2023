import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './home';
import SearchCode from './Search_code';
import Searchaddress from './Search_address';
import Map from './Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import {
  Navbar,
  NavbarToggler,
  Container,
  Collapse
} from "reactstrap";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
    textAlign: "center",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
};

export default function App(){
  const [collapsed, setCollapsed] = useState(true);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setCollapsed(true); // Close the navbar when a link is clicked
  };
  
  return (
    <div className="other_style">
      <Router>
          <Navbar light>
            <Container fluid>
              <NavbarToggler onClick={toggleNavbar} className="custom-toggler" />
              <Collapse isOpen={!collapsed} navbar>
              <Button
                  size="small"
                  onClick={() => handleLinkClick("home")}
                  as={Link}
                  to="/"
                  className={activeLink === "home" ? "active" : ""}
                  style={{ color: "white" }}
                  sx={{ fontSize: "1.5rem" }}
                >
                  Home
                </Button>
                <hr />
                <Button
                  size="small"
                  onClick={() => handleLinkClick("address")}
                  as={Link}
                  to="/address"
                  className={activeLink === "address" ? "active" : ""}
                  style={{ color: "white" }}
                  sx={{ fontSize: "1.5rem" }}
                >
                  Search for address
                </Button>
                <hr />
                <Button
                  size="small"
                  onClick={() => handleLinkClick("zipcode")}
                  as={Link}
                  to="/code"
                  className={activeLink === "zipcode" ? "active" : ""}
                  style={{ color: "white" }}
                  sx={{ fontSize: "1.5rem" }}
                >
                  Search for zip code
                </Button>
              </Collapse>
            </Container>
          </Navbar>
        <div className={`content ${!collapsed ? 'collapsed' : ''}`}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={<>
                                             <Typography variant="h3">Postcode Search</Typography>
                                             <Searchaddress /> 
                                             <Map /></>} />
            <Route path="/code" element={<>
                                          <Typography variant="h3">Postcode Search</Typography>
                                          <SearchCode /> 
                                          <Map /> 
                                        </>} />
          </Routes>
        </ThemeProvider>
        </div>
      </Router>
    </div>
  );
};
