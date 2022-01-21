import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css'

import Home from '../Home/Home.js';

import Title from './components/Title/Title.jsx';
import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';

const Login = () => {

const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState(false);
const [isLogin, setIsLogin] = useState(false);
const [hasError, setHasError] = useState(false);



function handleChange(name, value) {
	if (name === 'usuario') {
		setUser(value);
		
	}if (value.length < 7) {
		setPasswordError(true)
	}else {
		setPasswordError(false)
		setPassword(value);
	}
};

function ifMath(param){
	if (param.user.length > 0 && param.password.length >0) {
		if (param.user === 'Natalio' && param.password === '1234567') {
			const {user, password} = param;
			let acc = {user, password};
			let account = JSON.stringify(acc);
			localStorage.setItem('account',account);
			setIsLogin(true);
		}else {
			setIsLogin(false);
			setHasError(true);
		}	
	}else {
			setIsLogin(false);
			setHasError(true);
		}
}

function handleSubmit() {
	let account = {user, password}
	if (account) {
		ifMath(account);
	}
}

	return (
			<div className="div-content"> 
				{isLogin ? <Home/> :
					<>
				<div className="login-container">
					<Title text = '¡Welcome!'/>
					{hasError &&
					<label className="label-alert">Invalid or missing data</label>
					}
					<Label text="Username:"/>
					<Input
						attribute= {{
							id: 'usuario',
							name: 'usuario',
							type: 'text',
							placeholder: 'Enter your username'
						}}
						handleChange={handleChange}
					/>
					<Label text="Password:"/>
					<Input
						attribute= {{
							id: 'password',
							name: 'passwordword',
							type: 'password',
							placeholder: 'Enter your password'
						}}
						handleChange={handleChange}
						param={passwordError}
					/>
					{passwordError && 
						<label className="label-error">Invalid or incomplete password</label>
					}
		
					<button className="button-style" onClick ={handleSubmit}>
						<div className="button-div">Send</div>
					</button>
					<nav className="login-nav">
        				<Link className="login-link" to="/create-user">Create Account</Link>
        			</nav>
				</div>
			</>}
		</div>
	)
};

export default Login;