import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithEmailAndPassword,
	getAuth,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import google from "../images/google.svg";
import facebook from "../images/Facebook.svg";
import { toast } from "react-toastify";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user] = useAuthState(auth);

	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const loginAuth = getAuth();

	const router = useRouter();

	if (user) {
		router.push("/");
	}

	function googleSignIn() {
		signInWithPopup(loginAuth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				router.push("/");
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				if (error) {
					return toast.error(errorMessage, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			});
	}

	function facebookSignIn() {
		signInWithPopup(loginAuth, facebookProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;

				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				const credential = FacebookAuthProvider.credentialFromResult(result);
				const accessToken = credential.accessToken;
				router.push("/");
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;

				// The AuthCredential type that was used.
				const credential = FacebookAuthProvider.credentialFromError(error);
				console.log(errorCode);
				if (error) {
					return toast.error(errorMessage, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}

				// ...
			});
	}

	function emailSignIn() {
		signInWithEmailAndPassword(loginAuth, email, password)
			.then(() => {
				router.push("/");
			})
			.catch((error) => {
				console.log(error);
				return toast.error("Incorrect email or password", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
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
				<button className="login__btn" onClick={emailSignIn}>
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
