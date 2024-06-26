import React from 'react'
import ExpBox from '../components/ExpBox'
import Skillbox from '../components/Skillbox'
import { faPython, faHtml5, faCss3Alt, faReact, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons';

import './Experience.css'

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            pageTitle: '',
            finalTitle: 'Experience',
        };
    }

    typeWriter = () => {
		if (this.state.i < this.state.finalTitle.length) {
			this.tick();
			setTimeout(this.typeWriter, 150);
		}
	}

	tick = () => {
		this.setState({
            pageTitle: this.state.pageTitle + this.state.finalTitle.charAt(this.state.i),
			i: this.state.i + 1,
		});
	}

	componentDidMount() {
		this.typeWriter();
	}

    exparray = [
        {
            "position": "Software Engineer",
            "company": "Bloomberg L. P.",
            "duration": "August 2022 - Present",
            "description": "Worked as a full-stack engineer on multiple client-facing projects in the Trading Systems department. Redesigned and modularized backend C++ services and contributed to porting legacy C++ libraries to Linux. Engineering lead on a new project to build a clean & responsive UI for performing operations on custom data lists."
        },
        {
            "position": "Software Engineer Intern",
            "company": "Bloomberg L. P.",
            "duration": "February 2022 to May 2022",
            "description": "Interned on a project to unify two buy-side systems AIM and PORT in Trading Systems for a better client-side experience. Contributed to UI enhancements for this project and added new functionality requested by clients to the backend C++ service powering the same."
        },
        {
            "position": "Fintech Data Science Intern",
            "company": "Sarvatra Technologies",
            "duration": "August 2020 to October 2020",
            "description": "Worked on a data science project aiming to predict fraudulent debit card transactions using multivariate outlier detection. My project partner and I utilized an imbalanced dataset of four million real-world transactions to detect anomalous behaviour using unsupervised learning algorithms."
        }
    ]

    // skillarray = ["C++", "Python", "Machine Learning", "Deep Learning", "HTML + CSS", "React", "Bootstrap", "Git"]

    skillarray = [
        {
            "skill": "C++"
        },
        {
            "fa": faPython,
            "skill": "Python"
        },
        {
            "skill": "Machine Learning"
        },
        {
            "skill": "Deep Learning"
        },
        {
            "fa": faHtml5,
            "skill": "HTML"
        },
        {
            "fa": faCss3Alt,
            "skill": "CSS"
        },
        {
            "fa": faReact,
            "skill": "React"
        },
        {
            "fa": faBootstrap,
            "skill": "Bootstrap"
        },
        {
            "fa": faGitAlt,
            "skill": "Git"
        },
    ]

    render() {
        return (
            <div className={this.props.sidebar ? "root-exp-div root-exp-div-sidebar" : "root-exp-div"}>
                <div className="left-container">
                    <h1>{this.state.pageTitle}<span className="blinking-cursor">|</span></h1>
                    <ExpBox 
                        position={this.exparray[0].position}
                        company={this.exparray[0].company}
                        duration={this.exparray[0].duration}
                        description={this.exparray[0].description}
                    />
                    <ExpBox 
                        position={this.exparray[1].position}
                        company={this.exparray[1].company}
                        duration={this.exparray[1].duration}
                        description={this.exparray[1].description}
                    />
                    <ExpBox 
                        position={this.exparray[2].position}
                        company={this.exparray[2].company}
                        duration={this.exparray[2].duration}
                        description={this.exparray[2].description}
                    />
                </div>
                <div className="right-container">
                    <h1>some technologies and domains i like working in</h1>
                    <div className="skill-box">
                        {this.skillarray.map((skill, key) => {
                            return (
                                <Skillbox 
                                    fa={skill.fa}
                                    skill={skill.skill}
                                    key={key}
                                />
                            )
                        })}
                    </div>
                    <div className="achievements-box">
                        <ul>
                            <li>My team and I were in the top 10 teams in <a href="http://www.youtube.com/watch?v=BoRzMSs4hvY&t=48m42s" className="achievement-link" target="_blank" rel="noopener noreferrer">Execute Hack</a>.</li>
                            <li>We also won an honourable mention at <a href="https://devpost.com/software/moboshop" className="achievement-link" target="_blank" rel="noopener noreferrer">nwHacks 2021</a>.</li>
                            <li>We were also first in our college and second in the city in <a href="https://www.kaggle.com/c/datamaestro2020/leaderboard" className="achievement-link" target="_blank" rel="noopener noreferrer">Data Maestro 2020</a>, a machine learning competition hosted on Kaggle and among the top 10 in Data-Quest 2020.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;