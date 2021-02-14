import React from 'react'

import Name from '../components/Name'
import About from '../components/About'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="root-home-div">
                <Name />
                <About />
            </div>
        )
    }
}

export default Home;