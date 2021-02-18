import React from 'react'

import './Name.css'

class Name extends React.Component {
	render() {
		return (
			<div className="root-name-div">
				<h3>Hey there<span className="special-punctuation">!</span> I am</h3>
				<h1 className="first-name animation-hook" data-text="Swarnim">Swarnim</h1>
				<h1 className="last-name animation-hook" data-text="Sonawane">Sonawane</h1>
			</div>
		)
	}
};

export default Name;