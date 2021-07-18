import React, { useState, useEffect} from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";
import fire from './config/fire';

function Signup() {
	const [setname, setpassword] = useState('');
	const [nameError, setnameError] = useState('');
	const [passwordError, setpasswordError] = useState('');
	const [classError, setclassError] = useState('');
	const [groupError, setgroupError] = useState('');
	const [signupError, setsignupError] = useState('');
	
	
	const clearErrors = () => {
	  setnameError('');
	  setpasswordError('');	  
	  setclassError('');
	  setgroupError('');
      setsignupError('');
	};
	
	const clearinputs = () => {
		document.getElementById("name").value ='';
		document.getElementById("password").value ='';
		document.getElementById("class").value ='';
		document.getElementById("group").value ='';
	};
	
	const handleSignup = () => {
		
		clearErrors();
		const db = fire.firestore();
		const name = document.querySelector('#name').value;
		const password = document.querySelector('#password').value;
		const _class = document.querySelector('#class').value;
		const group = document.querySelector('#group').value;
		var [flag1, flag2, flag3, flag4] = [false, false, false, false];
		
		if (name === ""){
			setnameError("이름을 입력해 주세요!");
		} else {
			flag1 = true;
		}
		
		if (password === ""){
			setpasswordError("비밀번호를 입력해 주세요!");
		} else if (password.length < 4) {
			setpasswordError("비밀번호를 4자리 이상 입력해주세요!");
			document.getElementById("password").value ='';
		} else {
			flag2 = true;
		}
		
		if (_class === "") {
			setclassError("간부/병사 구분을 입력해주세요!");
		} else if (parseInt(_class) === 0 || parseInt(_class) === 1 || parseInt(_class) === 2){
			flag3 = true;
		} else {
			setclassError("간부/병사 구분을 0, 1, 2로 입력해주세요!");
			document.getElementById("class").value ='';
		}
		
		if (group === "") {
			setgroupError("소속을 적어주세요!");
		} else if (parseInt(group) === 0 || parseInt(group) === 1 || parseInt(group) === 2 || parseInt(group) === 3){
			flag4 = true;
		} else {
			setgroupError("소속을 0, 1, 2, 3으로 입력해주세요!");
			document.getElementById("group").value ='';
		}

		if (flag1 === true && flag2 === true && flag3 === true && flag4 === true) {
			const doc_user = db.collection("user").doc(name);
			doc_user.get().then((doc) => {
				if(doc.exists){
					console.log("데이터 존재 : ", doc.data());
					console.log("이미 존재하는 계정입니다!");
					setsignupError("이미 존재하는 계정입니다!");
					clearinputs();
				} else {
					doc_user.set({
						id: name,
						pw: password,
						class: _class,
						group: group,
						points: 0,
						recents: ""
					}).then(()=>{
						console.log("Document successfully written!");
						setsignupError("성공적으로 회원가입 되었습니다!")
						clearinputs();
						})
				}
			}).catch((error) => {
				console.log("error!!! : ", error);
			});
			
			
		// 	db.collection('user').doc(name).set({
		// 		id: name,
		// 		pw: password,
		// 		class: _class,
		// 		group: group,
		// 		points: 0,
		// 		recents: ""
		// 	}).then(()=>{
		// 		console.log("Document successfully written!");
		// 		setsignupError("성공적으로 회원가입 되었습니다!")
		// 		document.getElementById("name").value ='';
		// 		document.getElementById("password").value ='';
		// 		document.getElementById("class").value ='';
		// 		document.getElementById("group").value ='';
		// 	})
		// 	.catch((error) => {
		// 	console.error("Error writing document: ", error);
		// });
			
		}
	};
	
	
		
	return(
	<div>
		<div className="header">
			<h1>Points App</h1>
		</div>
		<div className="login">
			<div className="loginContainer">
				<div className="text">
					<h1>Sign Up Page</h1>
				</div>
				<div className="box">
					<h2>User name</h2> 
					<p>사용자 이름을 적어주세요</p>
					<p className="small">* 실제 이름을 적어주세요</p>
					<input id="name" placeholder="Enter Name.." type="text"/>
					<p className="errorMsg">{nameError}</p>
					
					<h2>Password</h2>
					<p>사용하실 비밀번호를 적어주세요</p>
					<p className="small">* 최소 네 자리 이상으로 적어주세요</p>
					<input id="password" placeholder="Enter Password.." type="text"/>
					<p className="errorMsg">{passwordError}</p>
					
					<h2>Class</h2>
					<p>간부/병사인지 아래 숫자로 알려주세요</p>
					<p className="small">* 간부이면 0, 분대장이면 1, 병사이면 2를 입력해주세요</p>
					<input id="class" placeholder="Enter Class.." type="text"/>
					<p className="errorMsg">{classError}</p>
					
					<h2>Group</h2>
					<p>소속을 적어주세요</p>
					<p className="small">* 여단본부는 0, 1대대는 1, 2대대는 2, 3대대는 3을</p>
					<p className="small">입력해주세요</p>
					<input id="group" placeholder="Enter Group.." type="text"/>
					<p className="errorMsg">{groupError}</p>
				</div>
				<div className="footer">
					<div className="blank">
						
						<Link to="/">
							<button className="btn-submit-form">Login</button>
						</Link>
						
					</div>
					<div className="blank">
						<button className="btn-submit-form" onClick={handleSignup}>Sign Up</button>
					</div>
				</div>
			    <p className="errorMsg">{signupError}</p>
			</div>
		</div>	
	</div>
	);	
	
	
}


export default Signup;