import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
	return (
		<>
			<Navbar user={props.user} />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
