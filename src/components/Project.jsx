import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Project.css'

class Project extends React.Component {

	render() {
		return (
			<div className="project-div">
                <img src={this.props.imgSource} alt="Screenshot of Project" />
                <div className="project-info">
                    <h2>{this.props.projectTitle}</h2>
                    <p>{this.props.projectDesc}</p>
                    <div className="align-flex-end-div">
                        <div className="project-footer-div">
                            <div className="technology-div">
                                {this.props.technologies.map((item, index) => {
                                    return (
                                        <div className="individual-technology" key={index}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="project-link-div">
                                {this.props.githubLink.length > 0 &&
                                    <a target="_blank" rel="noopener noreferrer" href={this.props.githubLink}>
                                        <FontAwesomeIcon icon={faGithub} className="individual-font-awesome other-fonts" />
                                    </a>
                                }
                                {this.props.projectLink.length > 0 &&
                                    <a target="_blank" rel="noopener noreferrer" href={this.props.projectLink}>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="individual-font-awesome" />
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
};

export default Project;