import Link from "next/link";
import Image from "next/image";
import icon from "../images/weightlifting-icon.svg";
import NavStyles from "./styles/NavStyles";

const Navbar = () => {
	return (
		<NavStyles>
			<Image src={icon} width={75} height={50} />
			<h1>Daily Workout</h1>

			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/workout">Today's Workout</Link>
		</NavStyles>
	);
};

export default Navbar;
