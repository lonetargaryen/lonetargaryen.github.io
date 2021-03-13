import React from 'react'
import Emoji from './Emoji'

import './Footer.css'

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-div">
				<p>Crafted painstakingly with <Emoji symbol="🔥" label="web"/> and <Emoji symbol="🌊" label="web"/> by <span>Swarnim Sonawane</span></p>
			</footer>
		)
	}
};

export default Footer;