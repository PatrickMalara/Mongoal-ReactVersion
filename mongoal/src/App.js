import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect
} from "react-router-dom";
import './App.css';
import Welcome from "./Welcome";
import Goals from "./Goals";
import Insights from "./Insights";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = { loggedIn: false};
        this.loginHandle = this.loginHandle.bind(this);
    }

	loginHandle(email, password) {
        let params = "userId=" + String(email) + "&Password=" + String(password)
        fetch("https://cors-anywhere.herokuapp.com/http://patrickmalara.com/mongoal/login.php?Username=" + String(email) + "&Password=" + String(password), {
            headers: {"Content-Type": "application/x-www-form-urlencorded"}
        })
        .then(response => response.json())
        .then(data =>
            {
                
                if(data.valid){
                    sessionStorage.setItem('userId', data.id);
                        (sessionStorage.getItem('userId'));
                    this.setState({
                        loggedIn: true
                    })
                }
               
                console.log(data)
            }
        );

        /*
        .then(result =>
            {
                console.log(result.valid);
                if( "1" === "1"){
                    this.setState({loggedIn: true});
                }
            }
        );
        */
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
