import React from 'react';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import ProjectCard from './projectCard';
import './index.scss';

import ecommerce from '../images/ecommerce.jpg';
import Astar from '../images/A star.png';
import teenpatti from '../images/teenpatti.png';
import htmx from '../images/djangohtmx.png';
import { faJsSquare, faPython, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
  
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, [])

return (
    <>
    <div  className="container projects-page">
      
        <div className="text-zone">
          <h1>
              <div className='red'>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['My ', ' Projects']}
              idx={15}
            />
            </div>
          </h1>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3">
             <ProjectCard image={ecommerce}
             type="Freelance Project"
             text="Basic Ecommerce Website"
             demo="https://kamati-ecommerce.herokuapp.com/"
             stack={[faHtml5, faPython, faCss3, faJsSquare]} />
             <ProjectCard image={Astar}
             type="Personal Project"
             text="A* Path Finder Visualization"
             demo="https://replit.com/@sumitsubedi/A-Path-Finding-Visualization-By-Sumit?outputonly=true#main.py"
             stack={[faPython]}
             code="https://github.com/sumit-subedi/A-visualizer" />
             <ProjectCard image={teenpatti}
             type="Personal Project"
             text="Three Card Game (Tkinter)"
             demo="https://replit.com/@sumitsubedi/RowdyDeadEngineering?outputonly=true#main.py"
             code="https://github.com/sumit-subedi/teenpatti-project"
             stack={[faPython]} />
             <ProjectCard image={htmx}
             type="Personal Project"
             text="HTMX E-Diary"
             demo="https://djangohtmxdemo.herokuapp.com/"
             code="https://github.com/sumit-subedi/django-htmx"
             stack={[faPython, faJsSquare]} />
             <ProjectCard image={ecommerce} />
             <ProjectCard image={ecommerce} />
             
            

       
    </div>
    </div>
    </>
)
}

export default Projects;