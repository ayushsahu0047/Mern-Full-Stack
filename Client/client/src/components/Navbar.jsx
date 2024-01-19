import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context';
import { CgProfile } from "react-icons/cg";
import {Link} from 'react-router-dom'


const Navbar = () => {
    const data = useContext(AppContext);
  return (
    <>
     <div className="nav_bar">
        <h2 className="left_brand">
            WDM
        </h2>
        <div className="right">
        {data.isAuthenticated && (
                <Link to = {'/addPost'} className='btn btn-info' onClick={data.logOut
                }>AddPost</Link>
            )}

            {data.isAuthenticated && (
                <button className='btn btn-info' onClick={data.logOut
                }>logout</button>
            )}
            {!data.isAuthenticated && (
                <Link to ={'/login'} className='btn btn-primary'>login</Link>
            )}
            {!data.isAuthenticated && (
                <Link to = {'/register'} className='btn btn-warning'>signUp</Link>
            )}
         {data.isAuthenticated && <CgProfile  style={{
            fontSize:'2rem'
         }}/>}
        </div>
    </div>
    </>
  )
}
export default Navbar