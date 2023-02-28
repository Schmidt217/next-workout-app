/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import icon from "../images/weightlifting-icon.svg";
import { logout } from "../firebase";

const Navbar = ({ user }) => {
	const [isNavExpanded, setIsNavExpanded] = useState(false);
	const sideNavRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		function handleClickOutside(e) {
			if (sideNavRef.current && !sideNavRef.current.contains(e.target)) {
				setIsNavExpanded(!isNavExpanded);
			}
		}
		// Add event listener to the document object
		document.addEventListener("mousedown", handleClickOutside);

		// Remove event listener when the component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isNavExpanded]);

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	return (
		<nav ref={sideNavRef} className="navigation">
			<button
				className="hamburger"
				onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="white"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div className="nav-image-container">
				<Image
					className="nav-image"
					alt="weights"
					src={icon}
					width={40}
					height={40}
				/>
			</div>
			<h1 className="nav-name">Workout Buildr</h1>
			<div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
				<ul onClick={() => setIsNavExpanded(!isNavExpanded)}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/workout">Today's Workout</Link>
					</li>
					<li>
						<Link href="/favorites">Favorites</Link>
					</li>
					{user && (
						<button className="signout-btn" onClick={logout}>
							Sign Out
						</button>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
