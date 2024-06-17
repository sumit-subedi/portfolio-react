// src/components/ProjectCard.js
import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faPython } from "@fortawesome/free-brands-svg-icons";

const icons = {
    "HTML": faHtml5,
    "CSS": faCss3,
    "JavaScript": faJsSquare,
    "Python": faPython,
    // Add other stack icons as needed
};

const ProjectCard = ({ title, type, description, demo, code, image, stack }) => {
    return (
        <div className="project-card">
            <img src={require(`../images/${image}`)} alt={title} />
            <div className="project-info">
                <h3>{type}</h3>
                <p>{title}</p>
                <p>{description}</p>
                <div className="stack">
                    {stack.map((tech, index) => (
                        <FontAwesomeIcon key={index} icon={icons[tech]} size="2x" />
                    ))}
                </div>
                <div className="links">
                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                    {code && <a href={code} target="_blank" rel="noopener noreferrer">Code</a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
