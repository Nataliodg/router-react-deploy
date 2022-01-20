import React, { useState } from 'react';
import './CreateUser.css';

import Title from './components/Title/Title.jsx';
import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';

const CreateUser = () =>{

const [email, setEmail] = useState('');
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
const [passwordError, setPasswordError] = useState(false);

function handleChange(name, value) {
	if (name === 'usuario') {
		setUser(value);
	}if (name === 'email') {
		setEmail(value);
	}if (name === 'password') {
		setPassword(value);
	}if (name === 'password2') {
		setPassword2(value);
	}if (password.length < 0 ) {
		setPasswordError(true)
		setPassword(value)
	}if (password === password2) {
		setPasswordError(false)
		setPassword(value);
		setPassword2(value);
	}else {
		setPasswordError(true)
		setPassword(value);
		setPassword2(value);
	}
};

// function Validar (password, password2) {
// 	if (password.length > 0) {
// 		if (password === password2 ){
// 		setPasswordError(false);
// 	}else{
// 		setPasswordError(true);
// 	}
// }	
// };

	return(
			<div className ='create-user-container'>
				<Title text = 'Registration'/>
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
				<Label text="Email:"/>
				<Input
					attribute= {{
						id: 'email',
						name: 'email',
						type: 'text',
						placeholder: 'Enter your email'
					}}
					handleChange={handleChange}
				/>
				<Label text="Password:"/>
				<Input
					attribute= {{
						id: 'password',
						name: 'password',
						type: 'password',
						placeholder: 'Enter your password'
					}}
					handleChange={handleChange}
					param={passwordError}

					/>
				<Label text="Repeat password:"/>
				<Input
					attribute= {{
						id: 'password2',
						name: 'password2',
						type: 'password',
						placeholder: 'Repeat password'
					}}
					handleChange={handleChange}
					param={passwordError}
				/>
				{passwordError && 
						<label className="create-user-label-error">Invalid or incomplete password</label>
					}
				<button className="create-user-button">
						<div className="create-user-button-div">Send</div>
				</button>
			</div>
		)
};

export default CreateUser;