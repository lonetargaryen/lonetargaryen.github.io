import React from 'react'
import ExpBox from '../components/ExpBox'

import './Experience.css'

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            pageTitle: '',
            finalTitle: 'Work Experience',
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

    exparray = [
        {
            "position": "Fintech Data Science Intern",
            "company": "Sarvatra Technologies",
            "duration": "August 2020 to October 2020",
            "description": "Worked on a data science project about predicting fraudulent debit card transactions using multivariate outlier detection."
        }
    ]

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
                    <h1>rite container</h1>
                </div>
            </div>
        )
    }
}

export default Experience;