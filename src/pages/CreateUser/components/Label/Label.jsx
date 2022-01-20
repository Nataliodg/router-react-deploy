import React from 'react';
import './Label.css';

const Title = ({ text }) => {
	return (
		<div className="create-user-label-container">
			<label className="create-user-label">
				{text}
			</label>
		</div>
	)
};

export default Title;