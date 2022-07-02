import React, { useEffect, useState } from "react";
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { signInWithGoogle } from "firebase/auth";
import { auth } from "../firebase";

import Spinner from "../components/Spinner";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const router = useRouter();
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);

	const register = () => {
		// if (!name) alert("Please enter name");
		createUserWithEmailAndPassword(email, password);
		console.log(email, password);
	};

	if (error) {
		alert(error.message);
	}

	useEffect(() => {
		if (loading) return <Spinner />;
		if (user) {
			setTimeout(() => {
				router.push("/");
			}, 5000);
		}
	}, [user, loading]);

	if (user) {
		return <h1>New account successfully made!</h1>;
	} else {
		return (
			<div className="register">
				<div className="register__container">
					<input
						type="text"
						className="register__textBox"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full Name"
					/>
					<input
						type="text"
						className="register__textBox"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="E-mail Address"
					/>
					<input
						type="password"
						className="register__textBox"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button className="register__btn" onClick={register}>
						Register
					</button>
					<button
						className="register__btn register__google"
						onClick={signInWithGoogle}
					>
						Register with Google
					</button>
					<div>
						Already have an account? <Link href="/login">Login</Link> now.
					</div>
				</div>
			</div>
		);
	}
}
export default Register;
