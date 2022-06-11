import "../styles/globals.css";
import { useState } from "react";
import { useLocalStorage } from "../components/useLocalStorage";
import Layout from "../components/Layout";
import AddExerciseContextProvider from "../context/state";

function MyApp({ Component, pageProps }) {
	const [myWorkout, setMyWorkout] = useLocalStorage("exercise", []);
	const [loading, setLoading] = useState(false);
	return (
		<AddExerciseContextProvider>
			<Layout>
				<Component
					{...pageProps}
					loading={loading}
					setLoading={setLoading}
					myWorkout={myWorkout}
					setMyWorkout={setMyWorkout}
				/>
			</Layout>
		</AddExerciseContextProvider>
	);
}

export default MyApp;
