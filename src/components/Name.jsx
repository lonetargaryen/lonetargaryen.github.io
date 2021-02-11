import React from 'react'

import './Name.css'

class Name extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			i: 0,
			initialtxt: "",
			txt: "Swarnim Sonawane",
			speed: 50
		}
	}

	typeWriter = () => {
		if (this.state.i < this.state.txt.length) {
			// document.getElementById("demo").innerHTML += this.state.txt.charAt(this.state.i);
			this.tick();
			setTimeout(this.typeWriter, this.state.speed);
		}
	}

	tick = () => {
		this.setState({
			i: this.state.i + 1
		});
	  }

	// componentDidMount() {
	// 	this.typeWriter();
	// }

	

	render() {
		return (
			<div className="root-name-div">
				<h1 id="demo"><span className="first-name">Sample</span> Text</h1>
			</div>
		)
	}
};

export default Name;