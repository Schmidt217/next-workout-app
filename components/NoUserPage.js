import React from "react";
import Link from "next/link";

function NoUserPage() {
	return (
		<div>
			<h1>You must sign in to access this page.</h1>
			<p>
				<Link href="/login">Click Here</Link> to log in!
			</p>
		</div>
	);
}

export default NoUserPage;
