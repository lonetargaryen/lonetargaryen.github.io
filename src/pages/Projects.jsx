import React from 'react'

import './Projects.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            pageTitle: '',
            finalTitle: 'Projects',
        };
    }

    render() {
        return (
            <div className="root-projects-div">
                <div className="projects-heading">
                    <h1>{this.state.finalTitle}</h1>
                </div>
                <div className="projects-content">

                </div>
            </div>
        )
    }
}

export default Projects;