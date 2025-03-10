import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AddNewDoctor from './components/AddNewDoctor'
import AddNewAdmin from './components/AddNewAdmin'
import Messages from './components/Messages'
import Doctors from './components/Doctors'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar'

function App() {
  const { isAuthenticated, setIsAuthenticated, setAdmin } =
  useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/admin/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setAdmin(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      // console.log(error.message)
      setAdmin({});
    }
  };
  fetchUser();
}, [isAuthenticated]);
console.log(isAuthenticated)
 
  return (
    <Router>
      <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
      <Route path='/admin/addnew' element={<AddNewAdmin/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
    </Routes>
    <ToastContainer position='top-center'/>
     </Router>
  )
}

export default App
