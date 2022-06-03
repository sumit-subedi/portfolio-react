import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import CubeSquare from '../Cube'
import './index.scss'

import React from 'react';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
  
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, [])
  return (
    <>
    <div className="container about-page">
        <div className="text-zone">
          <h1>
              <div className='red'>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            </div>
          </h1>
          <p>
            I'm a very ambitious full stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          {/* <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p> */}
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
       
          <div className="cube-spinner">
            <CubeSquare />
          </div>

    </div>
    </>
  )
}

export default About