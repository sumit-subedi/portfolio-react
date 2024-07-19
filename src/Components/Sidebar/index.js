import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faDiagramProject, faHistory } from '@fortawesome/free-solid-svg-icons';
import avatar from '../images/avatar.png';
import './index.scss';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <a href='#home'><img src={avatar} alt="avatar" /></a>
            <ul id="myMenu">
                <li data-menuanchor="home" className="active">
                    <a href="#home" className='home-link' aria-label="Home">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </a>
                </li>
                <li data-menuanchor="about">
                    <a href="#about" className='about-link' aria-label="About">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </a>
                </li>
                <li data-menuanchor="experience">
                    <a href="#experience" className='experience-link' aria-label="Experience">
                        <FontAwesomeIcon icon={faHistory} color="#4d4d4e" />
                    </a>
                </li>
                <li data-menuanchor="projects">
                    <a href="#projects" className='projects-link' aria-label="Projects">
                        <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
                    </a>
                </li>
                <li data-menuanchor="contact">
                    <a href="#contact" className='contact-link' aria-label="Contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
