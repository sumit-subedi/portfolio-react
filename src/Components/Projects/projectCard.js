import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";




const ProjectCard = (props) => {
  return (
    <div className="project" data-aos="flip-up" data-aos-duration="1000">
    <img
      src={props.image}
      alt="sunnysdie company"
    />
    <div className="details">
      <div className='projectinfo'>{props.type}</div>
      <div
        className="position-absolute top-50 start-50 translate-middle bg-accen w-100"
      >
        <p className="text-center">{props.text}</p>
        <div className="links_project">
       { props.demo &&
          <a
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
          >
            <FontAwesomeIcon icon={faEye} size="2x" color='white' />
          </a>}
          {props.code &&
          <a
            href={props.code}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color='white' />
          </a>}
        </div>
      </div>
      <div className="technology">
        <div className="row">
          
          {(props.stack)?.map(item => {
      return (
        <div className="col d-flex justify-content-center" >
           <FontAwesomeIcon icon={item} size="2x" color='rgb(7, 211, 247)' />

      </div>
      )
    })}
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;