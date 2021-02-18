import React from 'react'

import './Project.css'

class Project extends React.Component {

	render() {
		return (
			<div className="project-div">
                <img src={this.props.imgSource} alt="Screenshot of Project" />
                <div className="project-info">
                    <h2>{this.props.projectTitle}</h2>
                    <p>{this.props.projectDesc}</p>
                </div>
            </div>
		)
	}
};

export default Project;