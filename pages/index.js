import { useEffect } from "react";
import Head from "next/head";
import SearchExercise from "../components/SearchExercise";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const home = () => {
	const [user] = useAuthState(auth);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);

	const homePage = (
		<div>
			<Head>
				<title>Workout App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="../images/weightlifting-icon.svg" />
			</Head>
			<SearchExercise />
		</div>
	);

	return homePage;
};

export default home;
