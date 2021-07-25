import React from 'react';
import "./Soldier_recent.css";

class Soldier_recent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
		
	}
	
	onClick = () => {
		this.setState({number: this.state.number+1})
	}
	
	render(){
		const {recent_render} = this.props;
		const number = this.state.number;
		console.log("-------log -------- : ", recent_render);
		console.log(recent_render.length);
		console.log(number);
		return(
			recent_render.map((id, index) => {
				return(
					<div className="Soldier_recent">
						<p>{id}</p>
					</div>
					
				);
			})	
		)
	}

		
};

export default Soldier_recent;