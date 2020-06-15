import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
} from "react-router-dom";
import Goals from './Goals';
import Insights from './Insights';
 
class Welcome extends React.Component {

	constructor(props) {
		super(props);
		this.state = {redirect: null};
	}

	loginHandle = () => {
		this.props.loginHandle();
	}	
	onSubmit = () => {
		this.state.redirect = "goals"; 
	}

	render() {
		return(
			<div>
				<h1>Welcome Page</h1>
				<form>
					<button onClick={this.loginHandle}>Login</button>	
				</form>
			</div>
		);
		
	}	
}

export default Welcome;
