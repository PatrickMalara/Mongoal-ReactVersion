import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import Goals from "./Goals";
import Insights from "./Insights";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = { loggedIn: false};
	}

	loginHandle = () => {
		this.setState({loggedIn: true});
	}

	render(){
		return (
    		<div className="App">
    			<Router>
					<Route exact path="/" render={()=>(
						!this.state.loggedIn ? ( <Welcome loginHandle={this.loginHandle}/> ) : (<Redirect to="/goals" />)
					)}/>
					<Route exact path="/goals"> <Goals /> </Route>
					<Route path="/insights"> <Insights /> </Route>
				</Router>
			</div>
  		);
	}
}

export default App;
