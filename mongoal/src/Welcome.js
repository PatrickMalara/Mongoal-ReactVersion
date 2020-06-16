import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {

	constructor(props) {
		super(props);
	}

	loginHandle = () => {
		this.props.loginHandle();
	}	

	render() {
		return(
			<div>
                <div class="white-section">
                    <h1><strong>Mongoal</strong></h1>
                    <h3>A goal setting app that gives you statistics</h3>
                </div>
                <div class="blue-section">
                    <div class="row">
                        <div class="col-md-6">
                            <h2><strong>Sign Up</strong></h2>
                            <form>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" id="signupEmail" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="signupPass" />
                                </div>
                                <button type="submit" class="btn btn-light">Sign Up</button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <h2><strong>Login</strong></h2>
                            <form>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" id="loginEmail" />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="loginPass" />
                                </div>
                                <button onClick={this.loginHandle} type="submit" class="btn btn-light">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="white-section">
                    <h6>Developed by Patrick Malara</h6>
                </div>
            </div>
		);
		
	}	
}

export default Welcome;
