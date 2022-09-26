<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
=======
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
//   faSkype,
// } from '@fortawesome/free-brands-svg-icons'
import avatar from '../images/avatar.png';


import { faHome, faUser, faEnvelope, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
>>>>>>> master
import './index.scss'
const Sidebar = () => {
    return(
        <div className='nav-bar'>
<<<<<<< HEAD
           
=======
             <a href='#home'><img src={avatar} alt="avatar" /></a>
>>>>>>> master
<ul id="myMenu">
    <li data-menuanchor="home" className="active"><a href="#home"><FontAwesomeIcon icon={faHome} color="#4d4d4e" /></a></li>
    <li data-menuanchor="about"><a href="#about" className='about-link'>
    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </a></li>
<<<<<<< HEAD
    <li data-menuanchor="thirdPage"><a href="#thirdPage" className='contact-link'>
=======
    <li data-menuanchor="projects"><a href="#projects" className='products-link'>
    <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
    </a></li>
    <li data-menuanchor="contact"><a href="#contact" className='contact-link'>
>>>>>>> master
    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </a></li>
    
   </ul> 

</div>)
}

export default Sidebar