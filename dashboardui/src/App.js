import React from 'react';
import { CssBaseline, Box, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* navbar */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Navbar />
          {/* dashboard */}
          <Container maxWidth="xl" sx={{ mt: 6, mb: 4 }}>
          <Dashboard />        
          </Container>
        </Box>
    </ThemeProvider>
  );
};

export default App;

