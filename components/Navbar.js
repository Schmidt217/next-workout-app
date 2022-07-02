import Link from "next/link";
import Image from "next/image";
import icon from "../images/weightlifting-icon.svg";
import NavStyles from "./styles/NavStyles";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
	const [user] = useAuthState(auth);
	return (
		<NavStyles>
			<Image src={icon} width={75} height={50} />
			<h1>Daily Workout</h1>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/workout">Today's Workout</Link>
			{user && <button onClick={() => signOut(auth)}>Sign Out</button>}
		</NavStyles>
	);
};

export default Navbar;
