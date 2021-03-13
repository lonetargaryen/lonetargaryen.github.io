import React from 'react'
import Project from '../components/Project'

import './Projects.css'
import arkvl from '../images/arkvl.png'
import moboshop from '../images/moboshop.png'
import modular from '../images/modular.png'
import hirewolf from '../images/hirewolf.png'

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
            "githubLink": "https://github.com/lonetargaryen/arkvl",
            "youtubeLink": ""
        },
        {
            "imgSource": moboshop,
            "projectTitle": "Moboshop",
            "projectDesc": "Moboshop is a project my team and I made for nwHacks 2021. It's an innovative solution that uses computer vision to add items to your bill as you place them in your cart. After a customer has completed shopping, they can checkout on the app with the tap of a button, and walk out the store. It's that simple!",
            "technologies": ["Tensorflow", "Ionic", "Node.js"],
            "projectLink": "https://devpost.com/software/moboshop",
            "githubLink": "https://github.com/lonetargaryen/contactless-payment-system",
            "youtubeLink": "https://www.youtube.com/watch?v=rRioIG9Tavw"
        },
        {
            "imgSource": modular,
            "projectTitle": "Modular Supply Chain System",
            "projectDesc": "This is a project my team and I built for ExecuteHack. It's an efficient AI-enhanced supply chain that will facilitate the distribution of a COVID-19 vaccine in India, and deal with the pitfalls of the existing cold chain.",
            "technologies": ["Ionic", "Node.js", "PostgreSQL"],
            "projectLink": "https://devpost.com/software/modular-supply-chain-system",
            "githubLink": "https://github.com/lonetargaryen/supply-chain-user-app",
            "youtubeLink": "https://www.youtube.com/watch?v=U1q644qJzUo"
        },
        {
            "imgSource": hirewolf,
            "projectTitle": "Hirewolf",
            "projectDesc": "Hirewolf is an online testing platform that has relevant tests curated for relevant jobs, intended to make the lives of both recruiters and applicants much easier.",
            "technologies": ["React", "Tailwind CSS", "Node.js"],
            "projectLink": "https://devpost.com/software/hirewolf",
            "githubLink": "https://github.com/lonetargaryen/HIREWOLF",
            "youtubeLink": ""
        }
    ];

    render() {
        return (
            <div className={this.props.sidebar ? "root-projects-div root-projects-div-sidebar" : "root-projects-div"}>
                <div className="projects-heading">
                    <h1>{this.state.pageTitle}<span className="blinking-cursor">|</span></h1>
                </div>
                <div className="projects-content">
                    <Project 
                    imgSource={this.projectArray[0].imgSource} 
                    projectTitle={this.projectArray[0].projectTitle} 
                    projectDesc={this.projectArray[0].projectDesc} 
                    technologies={this.projectArray[0].technologies}
                    projectLink={this.projectArray[0].projectLink}
                    githubLink={this.projectArray[0].githubLink}
                    youtubeLink={this.projectArray[0].youtubeLink}
                    isEven={true}
                    sidebar={this.props.sidebar}
                    />
                    <Project 
                    imgSource={this.projectArray[1].imgSource} 
                    projectTitle={this.projectArray[1].projectTitle} 
                    projectDesc={this.projectArray[1].projectDesc} 
                    technologies={this.projectArray[1].technologies}
                    projectLink={this.projectArray[1].projectLink}
                    githubLink={this.projectArray[1].githubLink}
                    youtubeLink={this.projectArray[1].youtubeLink}
                    isEven={false}
                    sidebar={this.props.sidebar}
                    />
                    <Project 
                    imgSource={this.projectArray[2].imgSource} 
                    projectTitle={this.projectArray[2].projectTitle} 
                    projectDesc={this.projectArray[2].projectDesc} 
                    technologies={this.projectArray[2].technologies}
                    projectLink={this.projectArray[2].projectLink}
                    githubLink={this.projectArray[2].githubLink}
                    youtubeLink={this.projectArray[2].youtubeLink}
                    isEven={true}
                    sidebar={this.props.sidebar}
                    />
                    <Project 
                    imgSource={this.projectArray[3].imgSource} 
                    projectTitle={this.projectArray[3].projectTitle} 
                    projectDesc={this.projectArray[3].projectDesc} 
                    technologies={this.projectArray[3].technologies}
                    projectLink={this.projectArray[3].projectLink}
                    githubLink={this.projectArray[3].githubLink}
                    youtubeLink={this.projectArray[3].youtubeLink}
                    isEven={false}
                    sidebar={this.props.sidebar}
                    />
                </div>
            </div>
        )
    }
}

export default Projects;