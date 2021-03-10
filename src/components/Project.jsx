import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Skeleton from 'react-loading-skeleton';

import './Project.css'

class Project extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            image: false,
        }
    }

    handleImageLoaded() {
        this.setState({ image: true });
        console.log("hiiiii");
    }

	render() {
        
        const { loaded } = this.state.image;
        const imageStyle = !loaded ? { display: "none" } : { display: "none" };
		
        return (
            <div className="super-project-div">
                {this.props.isEven ? 
                <div className="project-div">
                    {!this.state.image && <Skeleton height="45vmin" width={700} /> }
                    <img src={this.props.imgSource} onLoad={this.handleImageLoaded.bind(this)} alt="Screenshot of Project" className={this.props.sidebar ? "sidebar-active-image-class" : "sidebar-image-class"} />
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
                                    {this.props.youtubeLink.length > 0 &&
                                        <a target="_blank" rel="noopener noreferrer" href={this.props.youtubeLink}>
                                            <FontAwesomeIcon icon={faYoutube} className="individual-font-awesome" />
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
                </div> : 
                <div className="project-div reverse-project-div">
                    <div className="project-info odd-project-info">
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
                                {this.props.youtubeLink.length > 0 &&
                                    <a target="_blank" rel="noopener noreferrer" href={this.props.youtubeLink}>
                                        <FontAwesomeIcon icon={faYoutube} className="individual-font-awesome" />
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
                    {!this.state.image && <Skeleton height="45vmin" width={700} /> }
                    <img src={this.props.imgSource} onLoad={this.handleImageLoaded.bind(this)} alt="Screenshot of Project" className={this.props.sidebar ? "sidebar-active-image-class" : "sidebar-image-class"} />
                </div>
                }
            </div>
		)
	}
};

export default Project;