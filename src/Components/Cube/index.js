import * as React from 'react';

import './index.css'
import Cube from 'react-3d-cube';
import python from '../images/python.png';
import django from '../images/django.png';

import {
    faJsSquare,
   faGitAlt,
   faLinux,
  
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CubeSquare extends React.Component {
  render() {
    return (
    
   
            
            <div
            style={{
                width: 200,
                height: 200
            }}
            >
            <Cube size={200} index="front">
            <img className='img' src = {python} alt="Python"/>
            <img className='img' src = {django} alt="Django"/>
            <div className="face">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" size='6x'/>
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size="6x" />
            </div>
            <div className="face">
              <FontAwesomeIcon icon={faLinux} color="#eda634" size="6x" />
            </div>
            
            <div className="face">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size='6x'/>
            </div>
            </Cube>
            </div>
       
     
    );
  }
}
export default CubeSquare