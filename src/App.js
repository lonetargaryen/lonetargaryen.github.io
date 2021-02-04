import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Sidebar />
				<Switch>
					<Route path="/">
						
					</Route>
				</Switch>
			</div>
  		</Router>
  	);
}

export default App;
