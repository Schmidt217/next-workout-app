import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { auth } from "../firebase";
import { toast } from "react-toastify";

import Spinner from "../components/Spinner";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPw, setConfirmPw] = useState("");

	const router = useRouter();
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const register = () => {
		if (confirmPw !== password) {
			return toast.error("Your passwords do not match!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		createUserWithEmailAndPassword(email, password);
	};

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

	useEffect(() => {
		if (loading) return <Spinner />;
		if (user) {
			setTimeout(() => {
				router.push("/");
			}, 5000);
		}
	}, [user, loading]);

	if (user) {
		return (
			<div className="register">
				<h1>New account successfully made!</h1>;
			</div>
		);
	} else {
		return (
			<div className="register">
				<div className="register__container">
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
					<input
						type="password"
						className="register__textBox"
						value={confirmPw}
						onChange={(e) => setConfirmPw(e.target.value)}
						placeholder="Confirm Password"
					/>

					<button className="register__btn" onClick={register}>
						Register
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
