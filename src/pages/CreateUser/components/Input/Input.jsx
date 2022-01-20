import React from 'react';
import './Input.css';

const Input = ({ attribute, handleChange, param  }) => {
	return (
		<div className="create-user-input-div">
			<input
			id= {attribute.id}
			name= {attribute.name}
			placeholder= {attribute.placeholder}
			type= {attribute.type}
			onChange= { (e) => handleChange(e.target.name, e.target.value) }
			className= {param ? 'create-user-input-error' : 'create-user-input-style'}
			/>
		</div>
	)
};

export default Input;