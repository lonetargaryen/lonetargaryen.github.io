import React from 'react'

import Name from '../components/Name'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="root-home-div">
                <Name />
            </div>
        )
    }
}

export default Home;