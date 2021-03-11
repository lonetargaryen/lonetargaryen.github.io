import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import './Connect.css'


class Connect extends React.Component {

    // connectarray = [faEnvelopeSquare, faLinkedin, faGithubSquare, faTwitterSquare]
    connectarray = [
        {
            "icon": faEnvelopeSquare,
            "url":"mailto:swarnim.sonawane@gmail.com"
        },
        {
            "icon": faGithubSquare,
            "url":"https://github.com/lonetargaryen"
        },
        {
            "icon": faLinkedin,
            "url":"https://www.linkedin.com/in/swarnim-sonawane-a894b21a0/"
        },
        {
            "icon": faTwitterSquare,
            "url":"https://twitter.com/SonawaneSwarnim"
        },
    ]

    render() {
        return (
            <div className="root-connect-div">
                <h2>Let's get in touch!</h2>
                <div className="icon-connect-div">
                    {this.connectarray.map((item, index) => {
						return (
                            <div className="individual-icon-div" key={index}>
                                <a target="_blank" rel="noopener noreferrer" href={item.url} className="individual-icon-link">
                                    <FontAwesomeIcon icon={item.icon} />
                                </a>
                            </div>
						)
					})}
                </div>
                <div className="download-resume-div">
                    <a href="../files/Swarnim_Sonawane_Resume.pdf" download="Swarnim Sonawane Resume"><button className="slide">Download my résumé</button></a>
                </div>
            </div>
        )
    }
}

export default Connect;