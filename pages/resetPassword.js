import React, { useEffect, useState } from "react";
import {
	useAuthState,
	useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { auth } from "../firebase";

import Spinner from "../components/Spinner";

function ResetPassword() {
	const [email, setEmail] = useState("");
	const [user] = useAuthState(auth);
	const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
		auth
	);
	const router = useRouter();

	useEffect(() => {
		// if (loading) return <Spinner />;
		if (user) router.push("/");
	}, [user]);

	if (error) {
		return (
			<div>
				<p>Error: {error.message}</p>
			</div>
		);
	}
	if (sending) {
		return (
			<div className="reset">
				<div className="reset__container">
					<Spinner width={100} height={100} />
				</div>
			</div>
		);
	}
	return (
		<div className="reset">
			<div className="reset__container">
				<input
					type="email"
					value={email}
					className="reset__textBox"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email Address"
				/>
				<button
					className="reset__btn"
					onClick={async () => {
						await sendPasswordResetEmail(email);
						alert("Sent email");
					}}
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
export default ResetPassword;
