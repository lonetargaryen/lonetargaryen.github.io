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

    typeWriter = () => {
		if (this.state.i < this.state.finalTitle.length) {
			this.tick();
			setTimeout(this.typeWriter, 200);
		}
	}

	tick = () => {
		this.setState({
            pageTitle: this.state.pageTitle + this.state.finalTitle.charAt(this.state.i),
			i: this.state.i + 1
		});
	}

    // randomInteger(min, max) {
    //     // Get a random int between min and max
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

	componentDidMount() {
		this.typeWriter();
	}

    render() {
        return (
            <div className="root-projects-div">
                <div className="projects-heading">
                    <h1>{this.state.pageTitle}<span class="blinking-cursor">|</span></h1>
                </div>
                <div className="projects-content">

                </div>
            </div>
        )
    }
}

export default Projects;