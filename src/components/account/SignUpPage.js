import React from 'react';
import {Link} from 'react-router';
import CenterPage from '../common/CenterPage';

function SignUpPage() {
	return (
		<div className="loginBody">
			<div className="center">
				<div className="loginHeader">
					<div className="innerCenter">
						Sign up for PCMaker.party!
					</div>
				</div>
				<div className="innerCenter">
					<form className="login__body" action="/progress">
						<label><b>Username</b></label>
						<input className="loginInput" type="text" placeholder="Enter Username" name="uname" required/>
						<br/>
						<label><b>Email</b></label>
						<input className="loginInput" type="text" placeholder="Enter Email" name="email" required/>
						<br/>
						<label><b>Password</b></label>
						<input className="loginInput" type="password" placeholder="Enter Password" name="psw" required/>
						<br/>
						<label><b>Confirm Password</b></label>
						<input className="loginInput" type="password" placeholder="Confirm Password" name="confirmpsw" required/>
						<br/>
						<input type="submit" value="Log In"/>
					</form>
					<form action="/">
						<input type="submit" value="Cancel"/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUpPage;