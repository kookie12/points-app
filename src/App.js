import './App.css';
import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Signup from './Signup.js';
import Login from './Login.js';
import Soldier from './Soldier.js';
import Give_points from './Give_points';
import Give_n_points from './Give_n_points';
// import Home from './Home.js';

class App extends React.Component {
	
	render() {
		return(
			<HashRouter>
				<Route path="/" exact={true} component={Login} /> 
				<Route path="/Signup" component={Signup} /> 
				<Route path="/Soldier" component={Soldier} /> 
				<Route path="/Give_points" component={Give_points} /> 
				<Route path="/Give_n_points" component={Give_n_points} /> 
			</HashRouter>
			
		);
	}
}

export default App;
