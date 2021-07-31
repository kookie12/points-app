import React from 'react';
import "./Soldier_recent.css";

class Soldier_recent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
		
	}
	
	render(){
		const {__recents} = this.props;
		const number = this.state.number;
		console.log("-------log -------- : ", __recents);
		// console.log(recent_log.length);
		console.log(number);
		return(
			__recents.map((id, index) => {
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