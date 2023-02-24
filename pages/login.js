/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleSignIn, facebookSignIn, emailSignIn } from "../firebase";
import google from "../images/google.svg";
import facebook from "../images/Facebook.svg";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user] = useAuthState(auth);

	const router = useRouter();

	if (user) {
		router.push("/");
	}

	return (
		<div className="login">
			<div className="login__container">
				<input
					type="text"
					className="login__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<input
					type="password"
					className="login__textBox"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button
					className="login__btn"
					onClick={() => emailSignIn(email, password)}
				>
					Login
				</button>
				<button className="login__btn login__google" onClick={googleSignIn}>
					<Image alt="Google" src={google} width={40} height={40} />
					Login with Google
				</button>
				<button className="login__btn login__google" onClick={facebookSignIn}>
					<Image alt="Facebook" src={facebook} width={40} height={40} />
					Login with Facebook
				</button>
				<div>
					<Link href="/resetPassword">Forgot Password</Link>
				</div>
				<div>
					Don't have an account? <Link href="/register">Register</Link> now.
				</div>
			</div>
		</div>
	);
}
export default Login;
