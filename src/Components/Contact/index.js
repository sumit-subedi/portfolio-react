import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow, faGoogle, faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const contactLinks = [
    {
      icon: faGithub,
      color: '#171515',
      href: 'https://github.com/sumit-subedi',
      label: 'GitHub'
    },
    {
      icon: faHackerrank,
      color: '#0894d4',
      href: 'https://www.hackerrank.com/vanje_sumit',
      label: 'HackerRank'
    },
    {
      icon: faLinkedinIn,
      color: '#0072b1',
      href: 'https://www.linkedin.com/in/sumit-subedi-ab741317b/',
      label: 'LinkedIn'
    },
    {
      icon: faGoogle,
      color: '#DB4437',
      href: 'mailto:vanje.sumit@gmail.com',
      label: 'vanje.sumit@gmail.com'
    },
    {
      icon: faStackOverflow,
      color: '#F47F24',
      href: 'https://stackoverflow.com/users/11027649/sumit-subedi',
      label: 'StackOverflow'
    }
  ];

  return (
    <div className="contact-page">
      <div className="text-zone">
        <h1>
          <span className="red">
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={["L", "e", "t'", "s  ", " ",  "C", "o", "n", "n", "e", "c", "t."]}
              idx={15}
            />
          </span>
        </h1>
        <div className="container">
          {contactLinks.map((link, index) => (
            <div className="links" key={index}>
              <FontAwesomeIcon icon={link.icon} size="2x" color={link.color} />
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
