import React from "react";
import Link from "next/link";

function NoUserPage() {
	return (
		<div style={{ height: "100vh" }}>
			<h1 style={{ textAlign: "center" }}>
				You must sign in to access this page.
			</h1>
			<p style={{ textAlign: "center" }}>
				<Link href="/login">Click Here</Link> to log in!
			</p>
		</div>
	);
}

export default NoUserPage;
