import React, { useState } from "react";
import { useLocalStorage } from "../components/useLocalStorage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../components/Layout";
import ExerciseContextProvider from "../context/state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "../styles/login.css";
import "../styles/register.css";
import "../styles/reset.css";
import "../styles/nav.css";

function MyApp({ Component, pageProps }) {
	const [myWorkout, setMyWorkout] = useLocalStorage("exercise", []);
	const [user] = useAuthState(auth || null);
	const [loading, setLoading] = useState(false);
	return (
		<>
			<ExerciseContextProvider>
				<Layout user={user}>
					<Component
						{...pageProps}
						user={user}
						loading={loading}
						setLoading={setLoading}
						myWorkout={myWorkout}
						setMyWorkout={setMyWorkout}
					/>
				</Layout>
			</ExerciseContextProvider>

			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default MyApp;
