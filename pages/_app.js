import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../components/useLocalStorage";
import Layout from "../components/Layout";
import AddExerciseContextProvider from "../context/state";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";
import "../styles/register.css";
import "../styles/reset.css";

function MyApp({ Component, pageProps }) {
	const [myWorkout, setMyWorkout] = useLocalStorage("exercise", []);
	const [loading, setLoading] = useState(false);
	return (
		<>
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

			<ToastContainer
				position="top-center"
				autoClose={5000}
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
