import React from 'react';

class Soldier extends React.Component {
	
	componentDidMount(){
		console.log("check1 : ", this.props);
		console.log("check2 : ", this.props.location);
		const { location, history } = this.props;
		if(location.state === undefined){   
			history.push("/");
		}
	}
	
	render() {
		const { location } = this.props; //클릭해서 들어간게 아니라 주소창으로 입력해서 들어가면 location.state가 false라서, 
		if (!location.state){
			return null;
		}
				
		return(
			<div>
				<h1>Hello, this is Home!!</h1>
				<h2>{location.state.name}</h2>
				<h2>{location.state.password}</h2>	
				<h2>{location.state._class}</h2>	
				<h2>{location.state.group}</h2>	
				<h2>{location.state.recents}</h2>	
				
				
			</div>
	
		);
	
	}
	
}

export default Soldier;