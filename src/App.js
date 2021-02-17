import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx'
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
	return (
		<Router>
			<div className="starry-background">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>
			</div>
			
			<div className="App">
				<Sidebar />
				<Switch>
				
					<Route path="/" exact>
						<Home />
					</Route>
		
				</Switch>
			</div>
  		</Router>
  	);
}

export default App;
