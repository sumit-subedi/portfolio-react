import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ProjectCard from './projectCard';
import projectsData from '../../data/projects.json';
import './index.scss';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerRow, setCardsPerRow] = useState(3); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setProjects(projectsData);
        updateCardsPerRow();
        window.addEventListener('resize', updateCardsPerRow);
        return () => window.removeEventListener('resize', updateCardsPerRow);
    }, []);

    const updateCardsPerRow = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            setCardsPerRow(1);
        } else if (width <= 1200) {
            setCardsPerRow(2);
        } else {
            setCardsPerRow(3);
        }
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex < Math.ceil(projects.length / cardsPerRow) - 1 ? prevIndex + 1 : prevIndex));
    };

    const getTransformStyle = () => {
        return {
            transform: `translateX(-${currentIndex * (100 / cardsPerRow)}%)`
        };
    };

    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <span className='red'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['M', 'y ', ' P', 'r', 'o', 'j', 'e', 'c', 't', 's', '.']}
                            idx={15}
                        />
                    </span>
                </h1>
            </div>
            <div className="carousel-container">
                <button className="arrow left" onClick={handlePrev}>&lt;</button>
                <div className="projects-carousel" style={getTransformStyle()}>
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            demo={project.demo}
                            code={project.code}
                            image={project.image}
                            stack={project.stack}
                        />
                    ))}
                </div>
                <button className="arrow right" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
}

export default Projects;
