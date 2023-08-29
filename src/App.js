import logo from './logo.svg';
import './App.css';
import theme from './Component/Theme/Theme'
import { Box, Button, ThemeProvider } from '@mui/material';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" height={'100vh'} overflow={'auto'}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/appointment' element={<Appointment></Appointment>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </Box>
    </ThemeProvider>

  );
}

export default App;
