import React from 'react'

import './Skillbox.css'

class Skillbox extends React.Component {

	render() {
		return (
            <div className="div-skillbox">
                <p>{this.props.skill}</p>
            </div>
		)
	}
};

export default Skillbox;