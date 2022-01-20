import React from 'react';
import './Home.css';

import Input from '../Login/components/Input/Input.jsx';

const Home = () => {
	return(
		<div className="home-container">
			<label className="home-label">
				<h1 className="home-h1">Hi</h1>
				<h3 className="home-h3"> , Natalio! <br/></h3> 
				<h2 className="home-h2">Welcome to website!</h2>
			</label>
			<button className="button-home">
				<div className="button-div">
					Continue
				</div>
			</button>
		</div>
		)
};

export default Home;