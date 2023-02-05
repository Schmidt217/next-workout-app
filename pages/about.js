import { useContext } from "react";
import AboutPage from "../components/styles/AboutPage";
import { ExerciseContext } from "../context/state";

const About = () => {
	const exerciseCtx = useContext(ExerciseContext);

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
