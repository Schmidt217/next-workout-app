import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

import Spinner from "../components/Spinner";
function Reset() {
	const [email, setEmail] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (loading) return <Spinner />;
		// if (user) router.push("/");
	}, [user, loading]);
	return (
		<div className="reset">
			<div className="reset__container">
				<input
					type="text"
					className="reset__textBox"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<button
					className="reset__btn"
					onClick={() => sendPasswordResetEmail(email)}
				>
					Send password reset email
				</button>
				<div>
					Don't have an account? <Link href="/register">Register</Link> now.
				</div>
			</div>
		</div>
	);
}
export default Reset;
