import React from 'react';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './App.css';

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

const App = () => {
  return (
    <div class="other_style">
      <ThemeProvider theme={theme}>
        <Typography variant="h3" >Postcode Search</Typography>
      </ThemeProvider>
      <Search />
    </div>
    
  );
};

export default App;

