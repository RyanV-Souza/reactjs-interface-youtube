import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

import Home from './Home';

function App() {

  

  const theme = createMuiTheme({
    palette: {
      spacing: 4,
      primary: {
        main: '#ff4336',
      },
      secondary: {
        main: '#3f51b5',
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}


export default App;

