import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import CubeSquare from '../Cube';

import './index.scss';
import React from 'react';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['S', 'U', 'M', 'I', 'T', '.'];
  const jobArray = ['Python / ', 'Web Developer.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass} red`}>H</span>
          <span className={`${letterClass} red`}>E</span>
          <span className={`${letterClass} red`}>L</span>
          <span className={`${letterClass} red`}>L</span>
          <span className={`${letterClass} red`}>O</span>
          <br />
          <span className={`${letterClass}`}>I</span>&nbsp;
          <span className={`${letterClass}`}>a</span>
          <span className={`${letterClass}`}>m</span>
          &nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={`${letterClass} small`} strArray={jobArray} idx={22} />
        </h1>
        <h2>Full Stack Developer / Python Noob / Fast Learner</h2>
      </div>
      <div className="cube-spinner">
        <CubeSquare />
      </div>
    </div>
  );
}

export default Home;
