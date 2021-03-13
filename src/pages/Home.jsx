import React from 'react'

import Name from '../components/Name'
import About from '../components/About'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className={this.props.sidebar ? "root-home-div root-home-div-sidebar" : "root-home-div"}>
                <Name />
                <About />
            </div>
        )
    }
}

export default Home;