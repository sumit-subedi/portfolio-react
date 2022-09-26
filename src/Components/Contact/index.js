import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedinIn, faStackOverflow, faGoogle, faHackerrank } from "@fortawesome/free-brands-svg-icons";

import React from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
  
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, [])
  return (
    <>
        <div className='contactpage'>
        <div className="text-zone">
          <h1>
              <div className='red'>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['Let\'s ', ' Connect']}
              idx={15}
            />
            </div>
          </h1>
          <div className='container'>
              <div className='links'>
          <FontAwesomeIcon icon={faGithub} size="2x" color='#171515' /> <a href='https://github.com/sumit-subedi'>  GitHub </a>
          </div>
          <div className='links'>
        <FontAwesomeIcon icon={faHackerrank} size="2x" color='#0894d4' /> <a href='https://www.hackerrank.com/vanje_sumit'>  HackerRank </a>
        </div>
        <div className='links'>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='#0072b1' /> <a href='https://www.linkedin.com/in/sumit-subedi-ab741317b/'>  Linked In </a>
        </div>
        <div className='links'>
        <FontAwesomeIcon icon={faGoogle} size="2x" color='#DB4437' /> <a href='mailto:vanje.sumit@gmail.com'>  Vanje,sumit@gmail.com </a>
        </div>
        <div className='links'>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" color='#F47F24' /> <a href="https://stackoverflow.com/users/11027649/sumit-subedi">StackOverflow</a>
        </div>
        </div>
        </div>
       




        </div>
    </>
  )
}

export default Contact