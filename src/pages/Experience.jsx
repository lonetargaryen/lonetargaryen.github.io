import React from 'react'
import ExpBox from '../components/ExpBox'
import Skillbox from '../components/Skillbox'

import './Experience.css'

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            pageTitle: '',
            finalTitle: 'Work Experience',
            j: 0,
            pageTitle2: '',
            finalTitle2: 'Skills',
        };
    }

    typeWriter = () => {
		if (this.state.i < this.state.finalTitle.length) {
			this.tick();
			setTimeout(this.typeWriter, 150);
		}
	}
    
    typeWriter2 = () => {
		if (this.state.j < this.state.finalTitle2.length) {
			this.tick();
			setTimeout(this.typeWriter2, 250);
		}
	}

	tick = () => {
		this.setState({
            pageTitle: this.state.pageTitle + this.state.finalTitle.charAt(this.state.i),
			i: this.state.i + 1,
            pageTitle2: this.state.pageTitle2 + this.state.finalTitle2.charAt(this.state.j),
			j: this.state.j + 1
		});
	}

	componentDidMount() {
		this.typeWriter();
        this.typeWriter2();
	}

    exparray = [
        {
            "position": "Fintech Data Science Intern",
            "company": "Sarvatra Technologies",
            "duration": "August 2020 to October 2020",
            "description": "Worked on a data science project about predicting fraudulent debit card transactions using multivariate outlier detection."
        }
    ]

    skillarray = ["C++", "Python", "HTML + CSS", "React", "Machine Learning", "Deep Learning"]

    render() {
        return (
            <div className="root-exp-div">
                <div className="left-container">
                    <h1>{this.state.pageTitle}<span className="blinking-cursor">|</span></h1>
                    <ExpBox 
                        position={this.exparray[0].position}
                        company={this.exparray[0].company}
                        duration={this.exparray[0].duration}
                        description={this.exparray[0].description}
                    />
                </div>
                <div className="right-container">
                    <h1>{this.state.pageTitle2}<span className="blinking-cursor2">|</span></h1>
                    <div className="skill-box">
                        {this.skillarray.map(skill => {
                            return (
                                <Skillbox 
                                    skill={skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;