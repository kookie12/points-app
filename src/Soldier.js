import React, {useState, useEffect} from 'react';
import Soldier_recent from "./Soldier_recent.js";
import AppShell from './AppShell';
import "./Soldier.css";
import Card from '@material-ui/core/Card'; //card 형태의 디자인!!
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; //문장을 출력할 때 이걸로 감싸서 출력함
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import image from './user.JPG';

function Soldier (props) {

	console.log("여기1!!!!!! : ", window.localStorage.getItem("__class"));
	console.log("여기2!!!!!! : ", window.localStorage.getItem("storage_flag"));
	console.log("여기3!!!!!! : ", window.localStorage.getItem("__recents"));
	if(props.location.state === undefined && JSON.parse(window.localStorage.getItem("storage_flag")) !== true) {
		props.history.push("/");
		
		if (JSON.parse(window.localStorage.getItem("__class")) === ""){
			props.history.push("/");
		}
	}
	
	//const {_class, group, name, points, n_points, recent_log, recents} = location.state;
	const [__class, set__class] = useState(() => JSON.parse(window.localStorage.getItem("__class")) || '');
	const [__group, set__group] = useState(() => JSON.parse(window.localStorage.getItem("__group")) || '');
	const [__name, set__name] = useState(() => JSON.parse(window.localStorage.getItem("__name")) || '');
	const [__points, set__points] = useState(() => JSON.parse(window.localStorage.getItem("__points")) || '');
	const [__npoints, set__npoints] = useState(() => JSON.parse(window.localStorage.getItem("__npoints")) || '');
	const [__recent_log, set__recent_log] = useState(() => JSON.parse(window.localStorage.getItem("__recent_log")) || ['test1', 'test2']);
	const [__recents, set__recents] = useState(() => JSON.parse(window.localStorage.getItem("__recents")) || []);	// const { location } = props;
	const [storage_flag, set__storage_flag] = useState(() => JSON.parse(window.localStorage.getItem("storage_flag")) || false);
	
	if (storage_flag === false){
		//const {_class, group, name, points, n_points, recents} = props.location.state;	
		//console.log("_class : ", _class)
	} else {
		// 여기 작성하기!!
	}
	
	console.log("props : ", props);
	console.log("props.location.state : ", props.location.state);
	window.localStorage.setItem('test', "test");
	
	const setup = () => {
		{console.log("setup 합니당 ~~ ");}
		{console.log("storage_flag  ", storage_flag );}
		{console.log("info 1 : ", __class, __group, __name, __points, __recents, storage_flag );}
		console.log("여기 ~~~~ ", typeof(__recents));
		if (storage_flag === false) {
			console.log("setup check ~~ ");
			const {_class, group, name, points, n_points, recents} = props.location.state;	
			set__class(_class);
			set__group(group);
			set__name(name);
			set__points(points);
			set__npoints(n_points);
			set__recents(recents);
			console.log("info 2 : ", __class, __group, __name, __points, __recents, storage_flag );
			console.log("여기 ~~~~ ", recents);
			console.log("여기 ~~~~ ", typeof(recents));
			window.localStorage.setItem('__class', JSON.stringify(__class));
			window.localStorage.setItem('__group', JSON.stringify(__group));
			window.localStorage.setItem('__name', JSON.stringify(__name));
			window.localStorage.setItem('__points', JSON.stringify(__points));
			window.localStorage.setItem('__npoints', JSON.stringify(__npoints));
			window.localStorage.setItem('__recents', JSON.stringify(__recents));
			set__storage_flag(true);
			window.localStorage.setItem('storage_flag', JSON.stringify(storage_flag));	
		}
		
		if (storage_flag === true) {
			// set__class(window.localStorage.setItem('__class', JSON.stringify(__class)));
			// set__group(window.localStorage.setItem('__group', JSON.stringify(__group)));
			// set__name(window.localStorage.setItem('__name', JSON.stringify(__name)));
			// set__points(window.localStorage.setItem('__points', JSON.stringify(__points)));
			// set__npoints(window.localStorage.setItem('__npoints', JSON.stringify(__npoints)));
			// set__recents(window.localStorage.setItem('__recents', JSON.stringify(__recents)));	
			// set__storage_flag(true);	
			// set__storage_flag(window.localStorage.setItem('storage_flag', JSON.stringify(storage_flag)));
			console.log("sibal~~~~~~");
		} 
	};
	
	const look_recents = () => {
		//const recent = this.props.location.state.recents;
		//const array = [];
		//console.log("recent : ", __recents); //this.state.recents 대신 recent
		//Object.keys(__recents).map((id) => {
		//	const log = __recents[id];
		//	console.log("id : ", id);
		//	console.log(log);
		//	array.push(log)
		//})
		
		//console.log("array : ", array);
		
		set__recent_log(__recents);
		
		console.log("__recents : ", __recents);
	};

	const callback = () => {
		setup();
		look_recents();		
	}
	
	useEffect(() => {
		console.log("-----------함수 실행 --------------");
		console.log('component mounted');
		callback();
		return () => console.log('component unmounting');
	}, [__class, __group, __name, __recents, __points, __npoints]); //흠.. 신기하네..
	
	
	return (
		<div>
			<div className="header">
				<h1>Points App</h1>
			</div>
			<AppShell 
				_class={__class}
				group={__group}
				name={__name}
			/>
			<div className="Soldier">
				<div className="Container">
					<Card>
						<CardContent>
							<img src={ image } width="100" height="100" alt="My Image" />
							<div className="name">{__name} 님 환영합니다!</div>
							{
								parseInt(__group) === 0 ? 
									<div className="text">소속 : 56사단 218여단 직할중대</div> : 
										parseInt(__group) === 1 ? 
											<div className="text">소속 : 56사단 218여단 1대대</div> : 
												parseInt(__group) === 2 ? 
													<div className="text">소속 : 56사단 218여단 2대대</div> : 
													<div className="text">소속 : 56사단 218여단 3대대</div>	
							}
							{ parseInt(__class) === 0 ? 
							<div className="text">구분 : 간부</div> : 
							parseInt(__class) === 1 ? 
								<div className="text">구분 : 분대장</div> : 
								<div className="text">구분 : 병사</div>
							}
							<div className="text">상점 : {__points}</div>
							<div className="text">벌점 : {__npoints}</div>
						</CardContent>
					</Card>
					<div className="emty"></div> 
					<Card>
						<CardContent>
							{ parseInt(__class) === 0 ? 
							<div className="name">최근 부여한 상벌점 내역</div> : 
							<div className="name">최근 받은 상벌점 내역</div>
							}
							{__recents.map((current, index) => 
								<div key={index}>{current}</div>
							)}
							
						</CardContent>
					</Card>
				</div>
			</div>		
		</div>
	
	
	
	);
}

export default Soldier;
//export default React.memo(Soldier);


/*
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
		// this.state = {
		//   recent_log: [],
		//   _class: '',
		//   group: '',
		//   name: '',
		//   points: '',
		//   n_points: '',
		//   recents: ''
		// }
		this.state = JSON.parse(window.localStorage.getItem('state')) || {
		  recent_log: [],
		  _class: '',
		  group: '',
		  name: '',
		  points: '',
		  n_points: '',
		  recents: '',
		  number: 0
		}
	}	

	componentWillMount() { //컴포넌트가 마운트되기 전에 실행되는 것!
		
		const contactData = localStorage.contactData;
		
		if(contactData) {
			this.setState({
				contactData: JSON.parse(contactData)
			})
		}
		
	}
	
	componentDidUpdate(prevPorps, prevState) { //컴포넌트의 state가 업데이트 될때마다 실행되는 api
		if(JSON.stringify(prevState.contactData) != this.state.contactData)
			localStorage.contactData = JSON.stringify(this.state.contactData);		
	}


	// update_state = () => {
	// 	console.log("################ 업데이트 했어!!!!!");
	// 	this.setState((prevState) => {
	// 		recent_log: state.recent_log,
	// 	    _class: state._class,
	// 	    group: state.group,
	// 	    points: state.points,
	// 	    n_points: state.n_points
				  
	// 		 // return this.setState({recent_log: state.recent_log});
	// 	});
	// }
	
	// componentDidUpdate(prevProps, prevState) { 
	// 	const json = JSON.stringify(this.state.recent_log); 
	// 	localStorage.setItem('recent_log', json) 
	// }


	// 	// 로컬 스토리지 데이터 가져오기 부분
	// componentWillMount() {   // 컴포넌트가 마운트 되기 전에 실행되는 API
	// const contactData = localStorage.recent_log;

	// if (contactData) {    // 로컬 스토리지에 값이 있으면 JSON 변환하여 불러옴 
	// this.setState({
	// recent_log: JSON.parse(contactData)
	// })
	// }
	// }

	// componentDidMount(prevProps, prevState){  // 컴포넌트가 업데이트될 때마다 실행되는 API
	// 	console.log("check1 : ", this.props);
	// 	console.log("check2 : ", this.props.location);
	// 	const { location, history } = this.props;
	// 	if(location.state === undefined){   
	// 		history.push("/");
	// 	}
		
	// 	if (JSON.stringify(prevState.recent_log) != JSON.stringify(this.state.recent_log)) {  // 이전 값과 지금 값이 다르면
	// localStorage.recent_log = JSON.stringify(this.state.recent_log);                  // 지금 값을 입력해 줌
	// 		console.log("진짜 성공한거임 !!");
	// }
	// }
	
	// setState(state) {
	// 	window.localStorage.setItem('state', JSON.stringify(state));
	// 	super.setState(state);
	// }
	
	// update_state_recent_log = () => {
	// 	this.setState((state) => {
	// 		return{ recent_log: state.recent_log}
	// 		 // return this.setState({recent_log: state.recent_log});
	// 	});
	// }
	
	// incrementCount() {
	//     this.setState((state) => {
	// 	// 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
	// 		return {count: state.count + 1}
	//   });
	// }
	 
	
	look_recents(){
		//const recent = this.props.location.state.recents;
		const array = [];
		console.log("recent : ", this.state.recents); //this.state.recents 대신 recent
		Object.keys(this.state.recents).map((id) => {
			const log = this.recents[id];
			console.log("id : ", id);
			console.log(log);
			array.push(log)
		})
		
		console.log("array : ", array);
		
		this.setState((prevState) => ({recent_log: array})); 
		//this.state.recent_log = array;
		
		// if (('localStorage' in window) && window.localStorage !== null)
		// alert('localStorage 를 지원합니다');
		
		// console.log("############# : ", this.state.recent_log);
		// this.setState(() => {
		// 	return {recent_log: array};
		// }) 왜 이건 안될까??
		
		//console.log("this.state.recent_log : ", this.state.recent_log);
			
	}
	
	update_state = () => {
		const { location } = this.props;
		const {_class, group, name, points, n_points, recent_log, recents} = location.state;
		
		// this.setState(() => ({_class: _class}, () => {console.log("setstate ~~ ")})); // 이게 안된다 ㅠㅠ
		// this.setState(() => ({group: group})); 
		// this.setState(() => ({name: name})); 
		// this.setState(() => ({points: points})); 
		// this.setState(() => ({n_points: n_points})); 
		// this.setState(() => ({recents: recents})); 
		this.setState((prevState) => ({number: parseInt(prevState.number) + 1}, console.log("성공!!!!!!!!!!!!!!!!!!!!")));		
	}
	
	render() {
		console.log("############# : 일단 재시작!!");
		
		const { location } = this.props; //클릭해서 들어간게 아니라 주소창으로 입력해서 들어가면 location.state가 false라서, 
		if (!location.state){
			return (
				<h1> 제대로 된 경로가 아닙니다!! </h1>
			);
		}
		
		const {_class, group, name, points, n_points, recent_log, recents} = location.state;
		// const recent_render = this.state.recent_log;
		
		
		this.update_state();
		
		this.look_recents();
		console.log("-------------------1 : ", location.state);
		console.log("-------------------2 : ", _class);
		console.log("-------------------3 : ", this.state._class);
		//console.log("-------------------4 : ", number);
		console.log("-------------------5 : ", this.number);
		// console.log("------------------- : ", recent_log);
		// console.log("############# : ", this.state.recent_log); // 받아오기 성공했다!!!!!! 오예~~
		
		return(
			<div>
				<div className="header">
					<h1>Points App</h1>
				</div>
				<AppShell 
					_class={_class}
					group={group}
					name={name}
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
								<Soldier_recent recent_log={recent_log} />	
							</CardContent>
						</Card>
					</div>
				</div>
				
				
			</div>
			
	
		);
	
	}
	
}

export default Soldier; */