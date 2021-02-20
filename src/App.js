import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
	
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<Router>
			<div className="starry-background">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
			</div>
			
			<div className="App">
				<Sidebar sidebar={sidebar} showSidebar={showSidebar} />
				<Switch>
				
					<Route path="/projects">
						<Projects sidebar={sidebar} />
					</Route>
					<Route path="/">
						<Home />
					</Route>
		
				</Switch>
			</div>
  		</Router>
  	);
}

export default App;
