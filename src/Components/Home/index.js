import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

import React from 'react'

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['S', 'U', 'M', 'I', 'T.']
    const jobArray = [
<<<<<<< HEAD
      'Python Developer / ',
=======
      'Python / ',
>>>>>>> master
      'Web Developer.'
    ]
  
    useEffect(() => {
<<<<<<< HEAD
    //    return setTimeout(() => {
    //     setLetterClass('text-animate-hover')
    //   }, 4000)
=======
  
>>>>>>> master
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000);
      return () => clearTimeout(timer);
    }, [])

  return (

    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} red`}>HELLO</span>
         
          <br /> 
          <span className={`${letterClass}`} >I</span>
          &nbsp;
          <span className={`${letterClass}`}>a</span>
          <span className={`${letterClass}`}>m</span>
          <span> &nbsp; </span>
         
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters 
            letterClass={`${letterClass} small`}
            strArray={jobArray}
            idx={22}
          />
          
        </h1>
       
        <h2>Full Stack Developer / Python Noob / Fast Learner</h2>
        
      </div>
      
<<<<<<< HEAD
=======
      
      
      
>>>>>>> master
    </div>

    
  </>
  )
}

export default Home