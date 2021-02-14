import React from 'react'

import './About.css'

class About extends React.Component {

	render() {
		return (
			<div className="about-me-div">
				<h4 className="about-me-heading">i'm a <span className="student-span">student</span> in my junior
                year of <span className="engineering-span">computer engineering</span>.</h4>
                <p className="about-me-p">
                    i like writing &#123; <span className="code-span">code</span> &#125; and i like solving problems.
                </p>
                <p className="about-me-p">
                    but what i really enjoy is writing code to solve problems.
                </p>
                <p className="about-me-p">
                    oh and i love music too.
                </p>
                <p className="about-me-p">
                    and movies.
                </p>
                <p className="about-me-p">
                    and video-games.
                </p>
                <p className="about-me-p">
                    welcome to my website!
                </p>
			</div>
		)
	}
};

export default About;