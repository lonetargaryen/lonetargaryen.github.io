import React from 'react'

import './ExpBox.css'

class Expbox extends React.Component {

	render() {
		return (
            <div className="div-expbox">
                <div className="expbox-pointer">&nbsp;</div>
                <h3 className="expbox-position">{this.props.position}</h3>
                <h3 className="expbox-company">at <a href="https://sarvatra.tech/" className="achievement-link" target="_blank" rel="noopener noreferrer">{this.props.company}</a></h3>
                <h3 className="expbox-duration">{this.props.duration}</h3>
                <p className="expbox-description">{this.props.description}</p>
            </div>
		)
	}
};

export default Expbox;