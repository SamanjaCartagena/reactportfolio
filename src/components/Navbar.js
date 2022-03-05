import React from 'react';

import myLogo1 from '../images/logosam1.png'
import AboutMe from '../components/AboutMe';
import Videos from './Videos';

//react fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#3c3347'}}>
    <div className='container'>
    <a class="navbar-brand" href="#"><img className='logo' src={myLogo1}  alt="Samanja..."/></a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home </a>

        </li>
        <li class="nav-item">
          <a class="nav-link" href='#aboutSection'>About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#servicesContainer">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#videosContainer">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
      </ul>
     
    </div>
    </div>
  </nav>
  )
}

export default Navbar