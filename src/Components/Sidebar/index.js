import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
const Sidebar = () => {
    return(
        <div className='nav-bar'>
           
<ul id="myMenu">
    <li data-menuanchor="home" className="active"><a href="#home"><FontAwesomeIcon icon={faHome} color="#4d4d4e" /></a></li>
    <li data-menuanchor="about"><a href="#about" className='about-link'>
    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </a></li>
    <li data-menuanchor="thirdPage"><a href="#thirdPage" className='contact-link'>
    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </a></li>
    
   </ul> 

</div>)
}

export default Sidebar