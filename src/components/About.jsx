import React from 'react'
import Emoji from './Emoji'

import './About.css'

class About extends React.Component {

	render() {
		return (
			<div className="about-me-div">
				<h4 className="about-me-heading">i'm a <span className="software-engineer-span">software engineer</span> at <span className="bloomberg-span">bloomberg</span> working on its
                 buy-side solution offering called <span className="aim-span">AIM</span>.</h4>
                <p className="about-me-p">
                    i like writing &#123; <span style={{color: "#43e97b"}}>code</span> &#125; that turn ideas to reality and
                    i enjoy solving problems with a <span style={{color: "#f6d365"}}>team</span>. i mostly code in C++, Python, JavaScript/TypeScript at work.
                </p>
                <p className="about-me-p">
                    i sometimes dabble a little in <span style={{color: "#ffb199"}}>machine learning</span> <Emoji symbol="⚙️" label="gear" rotate={true}/> and
                    <span style={{color: "#92fe9d"}}> front-end web development</span> <Emoji symbol="🕸️" label="web"/>.
                </p>
                <p className="about-me-p">
                    oh and i enjoy music and movies and video-games and table-tennis and i may or may not erupt into an unending tirade
                    about them.
                </p>
                <p className="about-me-p final-p">
                    welcome to my little space on the internet!
                </p>
			</div>
		)
	}
};

export default About;