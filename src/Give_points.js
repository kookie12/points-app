import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import './Give_points.css';
import AppShell from './AppShell';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import fire from './config/fire';

const useStyles = makeStyles((theme) => ({
	  root: {
		display: 'flex',
	  },
	  formControl: {
		margin: theme.spacing(3),
	  },
	}));

function Give_points (props) {
	//const {_class, group, name} = props.location.state;
	const [__class, set__class] = useState(() => JSON.parse(window.localStorage.getItem("__class")) || '');
	const [__group, set__group] = useState(() => JSON.parse(window.localStorage.getItem("__group")) || '');
	const [__name, set__name] = useState(() => JSON.parse(window.localStorage.getItem("__name")) || '');
	const [__reason, set__reason] = useState('');
	
	const classes = useStyles();
	const [state, setState] = React.useState({
		points_11: false,
		points_21: false, 
		points_31: false, 
		points_32: false, 
		points_33: false, 
		points_34: false, 
		points_41: false, 
		points_42: false, 
		points_51: false, 
		points_61: false,
		points_62: false, 
		points_71: false, 
		points_81: false, 
		points_82: false, 
		points_83: false, 
		points_84: false, 
		points_85: false
	});
	
	const [submitError, set_submitError] = useState('');
	
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
		console.log("document.getElementById(1-1).value:", document.getElementById("1-1").innerText);
		//console.log( " [event.target.name]: event.target.checked : ", [event.target.name], event.target.checked);
	};
	
	const { points_11, points_21, points_31, points_32, points_33, points_34, points_41, points_42, points_51, points_61, points_62, points_71, points_81, points_82, points_83, points_84, points_85} = state;
    //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
	
	const clearErrors = () => {
	  set_submitError('');
	};
	
	const clearinputs = () => {
		document.getElementById("s_name").value ='';
		document.getElementById("s_date").value ='';
		document.getElementById("s_group").value ='';
		document.getElementById("s_points").value ='';
	};
	
	const handleSignup = () => {
		
		clearErrors();
		const db = fire.firestore();
		const s_name = document.querySelector('#s_name').value;
		const s_date = document.querySelector('#s_date').value;
		const s_group = document.querySelector('#s_group').value;
		const s_points = document.querySelector('#s_points').value;
		var [flag1, flag2, flag3, flag4] = [false, false, false, false];
		console.log("정보 : ", s_name, s_date, s_group, s_points);
		console.log("INT : ", parseInt(s_points));
		console.log("INT : ", isNaN(parseInt(s_points))); //숫자면 FALSE, 
		
		if (s_name === "") {
			set_submitError('이름을 적어주세요!');
		} else { 
			flag1 = true; 
		}
		
		if (s_group === "") {
			set_submitError('소속을 적어주세요!');
		} else {
			flag2 = true;
		}
		
		if (s_date === "") {
			set_submitError('날짜를 적어주세요!');
		} else {
			flag3 = true;
		}
		
		if (s_points === "") {
			set_submitError('상점을 적어주세요!');
		}
		
		if (isNaN(parseInt(s_points)) === true) {
			set_submitError('상점을 숫자로 적어주세요!');
			document.getElementById("s_points").value ='';
		} else {
			flag4 = true;
		}
		
		if (flag1 === true && flag2 === true && flag3 === true && flag4 === true) {
			//상점 사유 가져오는 부분
			var reason_in = '';
			if (state.points_11 === true) {
				//console.log("안에 들어옴!!");
				//set__reason(__reason => __reason + ' ' + document.getElementById("1-1").innerText)
				console.log(__reason);
				reason_in = reason_in + ' ' + document.getElementById("1-1").innerText
			}
			
			if (state.points_21 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("2-1").innerText)
				reason_in = reason_in + ' ' + document.getElementById("2-1").innerText
			}
			
			if (state.points_31 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-1").value )
				reason_in = reason_in + ' ' + document.getElementById("3-1").innerText
			}
			
			if (state.points_32 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-2").value )
				reason_in = reason_in + ' ' + document.getElementById("3-2").innerText
			}
			
			if (state.points_33 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-3").value )
				reason_in = reason_in + ' ' + document.getElementById("3-3").innerText
			}
			
			if (state.points_34 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("3-4").value )
				reason_in = reason_in + ' ' + document.getElementById("3-4").innerText
			}
			
			if (state.points_41 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-1").value )
				reason_in = reason_in + ' ' + document.getElementById("4-1").innerText
			}
			
			if (state.points_42 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("4-2").value )
				reason_in = reason_in + ' ' + document.getElementById("4-2").innerText
			}
			
			if (state.points_51 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("5-1").value )
				reason_in = reason_in + ' ' + document.getElementById("5-1").innerText
			}
			
			if (state.points_61 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-1").value )
				reason_in = reason_in + ' ' + document.getElementById("6-1").innerText
			}
			
			if (state.points_62 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("6-2").value )
				reason_in = reason_in + ' ' + document.getElementById("6-2").innerText
			}
			
			if (state.points_71 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("7-1").value )
				reason_in = reason_in + ' ' + document.getElementById("7-1").innerText
			}
			
			if (state.points_81 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-1").value )
				reason_in = reason_in + ' ' + document.getElementById("8-1").innerText
			}
			
			if (state.points_82 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-2").value )
				reason_in = reason_in + ' ' + document.getElementById("8-2").innerText
			}
			
			if (state.points_83 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-3").value )
				reason_in = reason_in + ' ' + document.getElementById("8-3").innerText
			}
			
			if (state.points_84 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-4").value )
				reason_in = reason_in + ' ' + document.getElementById("8-4").innerText
			}
			
			if (state.points_85 === true) {
				set__reason(__reason => __reason + ' ' + document.getElementById("8-5").value )
				reason_in = reason_in + ' ' + document.getElementById("8-5").innerText
			}
			
			console.log("__reason : ", __reason);
			//firebase에 데이터 올리는 부분
			const doc_user = db.collection("user").doc(s_name);	
			doc_user.get().then((doc) => {
				if(doc.exists){
					console.log("데이터 존재1 : ", doc.data());
					console.log("데이터 존재2 : ", doc.data().group);
					console.log("데이터 존재3 : ", s_group);
					if(parseInt(doc.data().group) === parseInt(s_group)) {
						console.log("존재하는 계정입니다!");
						var before_points = parseInt(doc.data().points)
						var after_points = parseInt(doc.data().points) + parseInt(s_points)
						var belong = ''
						var rank = ''
						if (__group === '0') {
							belong="직할중대";
						} else if (__group === '1') {
							belong="1대대";
						} else if (__group === '2') {
							belong="2대대";
						} else if (__group === '3') {
							belong="3대대";
						}
						
						if (__class === '0') {
							rank="간부"
						} else if (__class === '1') {
							rank="분대장"
						} else if (__class === '2') {
							rank="병사"
						}
						
						//상점 데이터에 업데이트하는 부분
						var text = s_date + ' +' + s_points + ' / ' + reason_in + ' / ' +  belong + ' ' + rank + ' '+  __name + ' '
						doc_user.update({
							points: after_points
						})
						.catch((error) => {
							console.log("error 1 !!! : ", error);
						});
						set_submitError('상점 제출에 성공했습니다!');
						
						//recents 데이터에 update하는 부분
						const temp = doc.data().recents
						temp.push(text)
						doc_user.update({
							recents: temp
						})
						
						clearinputs();		
					} else {
						set_submitError('해당 소속에는 사용자가 없습니다!');
					}
				} else {
					set_submitError('존재하지 않는 사용자입니다!');
					clearinputs();
				}
			})
		}
		
	
	};
	
	useEffect(() => {
		console.log("I'm start...");
		return () => {
		  console.log("I'm dying...");
		};
	}, [__class, __group, __name, __reason]); //흠.. 신기하네..
	
	
	console.log("points_11 : ", points_11);
	
	return (
		<div className="Give_points">
			<div className="header">
				<h1>Points App</h1>
			</div>
			<AppShell 
				_class={__class}
				group={__group}
				name={__name}
			/>
			<div className="background">
				<div className="Container">
					<div className="box">
						<h1> 1. 상점을 줄 대상을 적어주세요!  </h1>	
						
						<div className="flex_container">
							<h2> 이름 : </h2>
							<input id="s_name" placeholder="Enter Name.." type="text"/>		
						</div>
						<div className="flex_container">
							<h2> 소속 : </h2>
							<input id="s_group" placeholder="Enter Group.." type="text"/>		
						</div>
						<p className="small">* 여단본부는 0, 1대대는 1, 2대대는 2, 3대대는 3을</p>
						<p className="small">입력해주세요</p>
						<div className="flex_container">
							<h2> 날짜 : </h2>
							<input id="s_date" placeholder="Enter Date.." type="text"/>		
						</div>
						<p className="small">* 2021.10.25 와 같은 형식으로 입력해주세요 </p>
					</div>
					
					
					<div className="box2">
						<h1> 2. 상점 사유를 골라주세요!  </h1>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 1. 경계 작전 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_11} color="primary" onChange={handleChange} name="points_11" />}
									    />
										<div className="points_text">
											<p id="1-1"> 특이사항 및 상황발생시 상황조치 우수 (+5) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 2. 교육 훈련 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_21} color="primary" onChange={handleChange} name="points_21" />}
									    />
										<div className="points_text">
											<p id="2-1"> 모범적인 교육 태도 (+3) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 3. 생활 태도 / 군인 기본 자세 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_31} color="primary" onChange={handleChange} name="points_31" />}
									    />
										<div className="points_text">
											<p id="3-1"> 일과 이후 (17:30) 및 휴일 부대를 위한 임무수행 (+3) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_32} color="primary" onChange={handleChange} name="points_32" />}
									    />
										<div className="points_text">
											<p id="3-2"> 주말 취사지원 (1일당 +6) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_33} color="primary" onChange={handleChange} name="points_33" />}
									    />
										<div className="points_text">
											<p id="3-3"> 취사병 지원(1~10일 +10, 10~20일 +20, 20~30일 +30) (+3) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_34} color="primary" onChange={handleChange} name="points_34" />}
									    />
										<div className="points_text">
											<p id="3-4"> 군인 기본자세(보행, 인솔, 경례 등) 우수 (+1) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 4. 병영 생활 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_41} color="primary" onChange={handleChange} name="points41" />}
									    />
										<div className="points_text">
											<p id="4-1"> 개인 관물대 정리정돈 / 생활관 청소 우수 (+1) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_42} color="primary" onChange={handleChange} name="points42" />}
									    />
										<div className="points_text">
											<p id="4-2"> 병영생활지도 결과 우수 생활관 (+2) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 5. 화기/장구류 관리 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_51} color="primary" onChange={handleChange} name="points_51" />}
									    />
										<div className="points_text">
											<p id="5-1"> 개인 장구류 / 보급품 손질 및 관리 우수 (+1 ~ +5) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 6. 명예로운 행위 / 솔선수범 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_61} color="primary" onChange={handleChange} name="points_61" />}
									    />
										<div className="points_text">
											<p id="6-1"> 헌혈 (+10) </p>
										</div>
									</div>
								  
								</FormGroup>
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_62} color="primary" onChange={handleChange} name="points_62" />}
									    />
										<div className="points_text">
											<p id="6-2"> 헌혈증 기부 (+10) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 7. 기타 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_71} color="primary" onChange={handleChange} name="points_71" />}
									    />
										<div className="points_text">
											<p id="7-1"> 종교행사(주말, 평일) 참석 </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						{/*======================================================*/}
						<div className="text_box">
							<h1> 8. 지휘권 보장 </h1>
						</div>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_81} color="primary" onChange={handleChange} name="points_81" />}
									    />
										<div className="points_text">
											<p id="8-1"> 분대장의 지휘권 보장 (+3 이내) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_82} color="primary" onChange={handleChange} name="points_82" />}
									    />
										<div className="points_text">
											<p id="8-2"> 하사 이상 간부의 지휘권 보장 (+3 이내) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_83} color="primary" onChange={handleChange} name="points_83" />}
									    />
										<div className="points_text">
											<p id="8-3"> 중대장/행정보급관의 지휘권 보장 (+5 이내) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_84} color="primary" onChange={handleChange} name="points_84" />}
									    />
										<div className="points_text">
											<p id="8-4"> 대대장/주임원사의 지휘권 보장 (+7 이내) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
						<FormControl component="fieldset" className="button_box">
								<FormGroup>
									
									<div className="flex_container">
										<FormControlLabel
									control={<Checkbox checked={state.points_85} color="primary" onChange={handleChange} name="points_85" />}
									    />
										<div className="points_text">
											<p id="8-5"> 여단장/주임원사의 지휘권 보장 (+10 이내) </p>
										</div>
									</div>
								  
								</FormGroup>
					    </FormControl>
					</div>
					
					
					<div className="box3">
						<h1> 3. 최종 상점을 적어주세요!  </h1>
						<div className="flex_container">
							<h2> 상점 : </h2>
							<input id="s_points" placeholder="Enter Points.." type="text"/>
						</div>
						<div className="footer">
							<p className="errorMsg">{submitError}</p>
						</div>		
						
					</div>
					
					
					<div className="flex_container">
						<div className="footer_1">
							<Link component={RouterLink} to="/Soldier">
								<Button variant="contained" color="primary" disableElevation>
								   <p>홈으로 가기</p>
								</Button>						
							</Link>		
						</div>
						
						<div className="footer_2">			
							<Button variant="contained" color="primary" onClick={handleSignup} disableElevation>
							   <p>제출하기</p>
							</Button>							
						</div>
					</div>
					
				</div>
			</div>
			
			
			
			

		</div>
		
	
	);
	
}

export default Give_points;



