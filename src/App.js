import './App.css';
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Signup from './Signup.js';
import Login from './Login.js';
import Soldier from './Soldier.js';
// import Home from './Home.js';

class App extends React.Component {
	
	render() {
		return(
			<HashRouter>
				<Route path="/" exact={true} component={Login} /> 
				<Route path="/Signup" component={Signup} /> 
				<Route path="/Soldier" component={Soldier} /> 
			</HashRouter>
			
		);
	}
}

export default App;
