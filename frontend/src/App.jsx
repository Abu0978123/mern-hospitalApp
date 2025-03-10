
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Appointment from './pages/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import { Context } from './main';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } =
  useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/patient/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      // console.log(error.message)
      setUser({});
    }
  };
  fetchUser();
}, [isAuthenticated]);
console.log(isAuthenticated)
 
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/appointment' element= {<Appointment/>}/>
    </Routes>
    <Footer/>
    <ToastContainer position='top-center'/>
  </Router>
  )
}

export default App
