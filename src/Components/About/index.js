import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import AboutText from '../../data/about.json';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [content, setContent] = useState({ paragraphs: [], education: [] });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setContent(AboutText);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <span className="red">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </span>
        </h1>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Draggable>
        <div className="education-card">
          <div className="card-header">
            <h2>Education</h2>
            <FontAwesomeIcon icon={faArrowsAlt} className="drag-icon" />
            <span className="drag-text">Drag me!</span>
          </div>
          <ul>
            {content.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </li>
            ))}
          </ul>
        </div>
      </Draggable>
    </div>
  );
};

export default About;
