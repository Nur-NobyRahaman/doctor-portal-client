import './App.css';
import theme from './Component/Theme/Theme'
import { Box, ThemeProvider } from '@mui/material';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Error from './Pages/Error/Error';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" height={'100vh'} overflow={'auto'}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>}>
          </Route>
          <Route path='/dashboard' element={
            <RequireAuth><Dashboard></Dashboard> </RequireAuth>}>
            <Route index element={<MyAppointments />}></Route>
            <Route path='review' element={<MyReviews />}></Route>
            <Route path='history' element={<MyHistory />}></Route>
            <Route path='payment/:id' element={<Payment />}></Route>
            <Route path='allUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
            <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
            <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors/></RequireAdmin>}></Route>
          </Route>


          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
          
        </Routes>
      </Box>
    </ThemeProvider>

  );
}

export default App;
