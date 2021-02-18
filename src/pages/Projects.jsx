import React from 'react'
import Project from '../components/Project'

import './Projects.css'
import arkvl from '../images/arkvl.png'

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

	componentDidMount() {
		this.typeWriter();
	}

    projectArray = [
        {
            "imgSource": arkvl,
            "projectTitle": "Arkvl",
            "projectDesc": "Arkvl is a web-based book recommender system that recommends books to users based on their likes and lets users explore books from a wide catalog based on their favourite authors and genres.",
            "technologies": ["React", "Flask", "PostgreSQL"],
            "projectLink": "https://arkvl.space",
            "githubLink": "https://github.com/LethalPants/arkvl"
        }
    ];

    render() {
        return (
            <div className="root-projects-div">
                <div className="projects-heading">
                    <h1>{this.state.pageTitle}<span className="blinking-cursor">|</span></h1>
                </div>
                <div className="projects-content">
                    <Project imgSource={this.projectArray[0].imgSource} projectTitle={this.projectArray[0].projectTitle} projectDesc={this.projectArray[0].projectDesc} />
                </div>
            </div>
        )
    }
}

export default Projects;