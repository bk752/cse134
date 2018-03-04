import React from 'react';
import {Link} from 'react-router';
import CenterPage from '../common/CenterPage';

function SignInPage() {
	return (
		<div classNameName="loginBody">
			<div className="center">
				<header className="loginHeader">
					<div className="innerCenter">
						Log in to PCMaker.party!
					</div>
				</header>
				<div className="innerCenter">
					<form className="login__body" action="/progress">
						<label><b>Username</b></label>
						<input className="loginInput" type="text" placeholder="Enter Username" name="uname" required/>
						<br/>
						<label><b>Password</b></label>
						<input className="loginInput" type="password" placeholder="Enter Password" name="psw" required/>
						<br/>
						<input type="submit" value="Log In"/>
					</form>
					<form action="/">
						<input type="submit" value="Cancel" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignInPage;