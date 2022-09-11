import AboutPage from "../components/styles/AboutPage";
import { toast } from "react-toastify";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		return toast.success("You're on the about page!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}, []);
	return (
		<>
			<AboutPage>
				<h1>Daily Workout App</h1>
				<small>Version 1.0.0</small>
				<p>
					This app was created to give a view of various workouts and how to
					perform them. If you like the exercise, simply add the workout to your
					daily workout and choose the sets and reps to perform!
				</p>
			</AboutPage>
		</>
	);
};

export default About;
