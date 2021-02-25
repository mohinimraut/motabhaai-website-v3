

import React from 'react'
import './App.css';
import header from '../src/images/Group 40.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-light">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={header} id= "headerimg" class="img-fluid" alt="Responsive img" style={{width:"30%",height:"30%"}}/></NavLink>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button> */}
      
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">

   

    {/* <li className="nav-item active">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" aria-current="page" to="/home">HOME</NavLink>
    </li>
   
    <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" aria-current="page" to="/aboutT">ABOUT US</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" to="/featuresT">FEATURES</NavLink>
    </li> */}

    {/* <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" to="/join">JOIN</NavLink>
    </li> */}
   
    {/* <li className="nav-item">
      <NavLink className="navlinkstyle" exact activeClassName="active_class" to="/contactT">CONTACT</NavLink>
    </li> */}
   
   
    {/* <li className="nav-item">
    <NavLink className="navbar-brand" to="/join">
    <button className="btn " type="button" style={{backgroundColor:"#2c3d63",borderRadius:"0.9rem",width:"5rem",color:"white"}}>Join
    </button>
    </NavLink>
    </li> */}

    </ul>
      
    </div>
   </div>
  </nav>
    </>
  )
}

export default Navbar;
