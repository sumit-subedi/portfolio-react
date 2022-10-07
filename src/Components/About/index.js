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
            I'm a very ambitious full stack developer looking for freelancing project, be it web or desktop software. 
            I'm familiar with multiple stacks from Django to NodeJS and HTMX to React.
            </p>
          {/* <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p> */}
          <p>
            I have already completed multiple projects including E-commerce website, POS system and an orgazational website with payment gateway.
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