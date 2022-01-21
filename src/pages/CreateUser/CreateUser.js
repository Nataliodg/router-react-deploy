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
				/>
				<Label text="Email:"/>
				<Input
					attribute= {{
						id: 'email',
						name: 'email',
						type: 'text',
						placeholder: 'Enter your email'
					}}
				/>
				<Label text="Password:"/>
				<Input
					attribute= {{
						id: 'password',
						name: 'password',
						type: 'password',
						placeholder: 'Enter your password'
					}}

					/>
				<Label text="Repeat password:"/>
				<Input
					attribute= {{
						id: 'password2',
						name: 'password2',
						type: 'password',
						placeholder: 'Repeat password'
					}}
				/>
				<button className="create-user-button">
						<div className="create-user-button-div">Send</div>
				</button>
			</div>
		)
};

export default CreateUser;