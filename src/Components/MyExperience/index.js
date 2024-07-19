import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const MyExperience = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const timeline = [
    { date: '2000 - 2017', title: 'Born and Raised', description: 'Born and raised in my homeland, Nepal, close to my parents friends and relatives.' },
    { date: '2017 - 2021', title: 'Studied BSCCSE', description: 'Travelled to India looking for higher studies, pursued Computer Engineering ' },
    { date: '2019', title: 'Started Coding', description: 'Started coding and personal projects, interned as a backend engineer for Hilspade as Django major.' },
    { date: '2021', title: 'Graduated', description: 'Graduated in 2021 and returned back to Nepal to again be close with my family and relatives.' },
    { date: 'Nov 2021 - Dec 2022', title: 'Full Stack Developer', description: 'Full stack developer at Square Production to work on a Restaurant Management Software.' },
    { date: 'May 2023 - Present', title: 'Moved to Canada', description: 'Moved to Canada to pursue my postgraduate certificate.' },
  ];

  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
          <span className="red">
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </span>
        </h1>
        <section className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="card-content">
                <h2>{item.date}</h2>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MyExperience;