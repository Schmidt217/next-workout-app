import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import Spinner from "../components/Spinner";
import google from "../images/google.svg";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	const googleProvider = new GoogleAuthProvider();
	const googleAuth = getAuth();

	const router = useRouter();

	const googleSignIn = () =>
		signInWithPopup(googleAuth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});

	useEffect(() => {
		if (loading) {
			return <Spinner />;
		}
		if (user) {
			router.push("/");
		}
	}, [user, loading, googleSignIn]);
	console.log(user);

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
					onClick={() => signInWithEmailAndPassword(email, password)}
				>
					Login
				</button>
				<button className="login__btn login__google" onClick={googleSignIn}>
					<Image src={google} width={40} height={40} />
					Login with Google
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
