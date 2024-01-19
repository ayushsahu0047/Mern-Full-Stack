import React, { useContext } from 'react'
import { AppContext } from './context/App_Context'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login'
import Navbar from './components/Navbar'
import AddPost from './components/AddPost';
import Register from './components/Register';
import Profile from './components/Profile';
import Post from './components/Post';


const App = () => {
  const data = useContext(AppContext)
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Post/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>
      <Route path="/AddPost" element ={<AddPost/>}/>
      <Route path="/Profile" element ={<Profile/>}/>
    </Routes>
      </Router>
     
      
      
     
    </>
  )
}

export default App
