import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.doLogin = this.doLogin.bind(this);
        this.emailInputStateChange = this.emailInputStateChange.bind(this);
        this.passwordInputStateChange = this.passwordInputStateChange.bind(this);
	}

    doLogin(){
        this.props.loginHandle(this.state.email, this.state.password);
    }

    /*
    doLogin = () => {
        this.props.loginHandle(this.state.email, this.state.password);
    }
    */

    emailInputStateChange(event) {
        this.setState({email: event.target.value});
    }

    passwordInputStateChange(event) {
        this.setState({password: event.target.value});
    }

	render() {
		return(
			<div>
                <div className="white-section">
                    <h1><strong>Mongoal</strong></h1>
                    <h3>A goal setting app that gives you statistics</h3>
                </div>
                <div className="blue-section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2><strong>Sign Up</strong></h2>
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="signupEmail" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="signupPass" />
                                </div>
                                <button type="submit" className="btn btn-light">Sign Up</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h2><strong>Login</strong></h2>
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input onChange={this.emailInputStateChange} type="text" className="form-control" id="loginEmail" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input onChange={this.passwordInputStateChange} type="password" className="form-control" id="loginPass" />
                                </div>
                                <input type="button" onClick={this.doLogin} className="btn btn-light" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="white-section">
                    <h6>Developed by Patrick Malara</h6>
                </div>
            </div>
		);
		
	}	
}

export default Welcome;
