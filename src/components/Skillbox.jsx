import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Skillbox.css'

class Skillbox extends React.Component {

	render() {
		return (
            <div className="div-skillbox">
				<FontAwesomeIcon icon={this.props.fa} className="skillbox-fa" />
                {this.props.skill}
            </div>
		)
	}
};

export default Skillbox;