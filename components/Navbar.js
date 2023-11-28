import React from 'react';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
     <a className="navbar-brand" href="#" style={{fontSize:"20px"}}><span className="text-dark">Resonator*</span> </a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#">Pages</a>
          </li>
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#">Podcast</a>
          </li>
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#">Blog</a>
          </li>
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#">Shop</a>
          </li>
          <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link active" aria-current="page" href="#"><FaSearch />Search</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar