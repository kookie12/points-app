import React from 'react';
import Soldier_recent from "./Soldier_recent.js";
import AppShell from './AppShell';
import "./Soldier.css";
import Card from '@material-ui/core/Card'; //card 형태의 디자인!!
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; //문장을 출력할 때 이걸로 감싸서 출력함
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import image from './user.JPG';

class Soldier extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			recent_log: []
		};
		
	}
	
	componentDidMount(){
		console.log("check1 : ", this.props);
		console.log("check2 : ", this.props.location);
		const { location, history } = this.props;
		if(location.state === undefined){   
			history.push("/");
		}
	}
	
	look_recents(){
		const recent = this.props.location.state.recents;
		const array = [];
		console.log("recent : ", recent);
		Object.keys(recent).map((id) => {
			const log = recent[id];
			console.log("id : ", id);
			console.log(log);
			array.push(log)
		})
		
		//console.log("array : ", array);
		
		this.state.recent_log = array;
		// this.setState(() => {
		// 	return {recent_log: array};
		// }) 왜 이건 안될까??
		
		//console.log("this.state.recent_log : ", this.state.recent_log);
			
	}
	
	render() {
		const { location } = this.props; //클릭해서 들어간게 아니라 주소창으로 입력해서 들어가면 location.state가 false라서, 
		if (!location.state){
			return null;
		}
		this.look_recents();
		const recent_render = this.state.recent_log;
		//console.log("---------------- : ", recent_render);
				
		return(
			<div>
				<div className="header">
					<h1>Points App</h1>
				</div>
				<AppShell 
					_class={location.state._class}
					group={location.state.group}
					name={location.state.name}
				/>
				<div className="Soldier">
					<div className="Container">
						<Card>
							<CardContent>
								<img src={ image } width="100" height="100" alt="My Image" />
								<div className="name">{location.state.name} 님 환영합니다!</div>
								{
									parseInt(location.state.group) === 0 ? 
										<div className="text">소속 : 56사단 218여단 직할중대</div> : 
											parseInt(location.state.group) === 1 ? 
												<div className="text">소속 : 56사단 218여단 1대대</div> : 
													parseInt(location.state.group) === 2 ? 
														<div className="text">소속 : 56사단 218여단 2대대</div> : 
														<div className="text">소속 : 56사단 218여단 3대대</div>	
								}
								{ parseInt(location.state._class) === 0 ? 
								<div className="text">구분 : 간부</div> : 
								parseInt(location.state._class) === 1 ? 
									<div className="text">구분 : 분대장</div> : 
									<div className="text">구분 : 병사</div>
								}
								<div className="text">상점 : {location.state.points}</div>
								<div className="text">벌점 : {location.state.n_points}</div>
							</CardContent>
						</Card>
						<div className="emty"></div> 
						<Card>
							<CardContent>
								<div className="name">최근 받은 상벌점 내역</div>
								<Soldier_recent recent_render={recent_render} />	
							</CardContent>
						</Card>
					</div>
				</div>
				
				
			</div>
			
	
		);
	
	}
	
}

export default Soldier;