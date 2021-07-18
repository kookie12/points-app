import React from 'react';

class Soldier extends React.Component {
	
	componentDidMount(){
		console.log(this.props);
		const { location, history } = this.props;
		if(location.state === undefined){   
    		history.push("/");
		}
	}
	
	render() {
		const { location } = this.props; //클릭해서 들어간게 아니라 주소창으로 입력해서 들어가면 location.state가 false라서, 
		if (location.state) { //false라면 render() 이후 componentDidMount()가 실행되면서 "/"화면으로 이동함
			return <span>{location.state.title}</span>;
		} else{
			return null;
		}
		
		return(
		<h1>Hello, this is Home!!</h1>
	
		);
	
	}
	
}

export default Soldier;