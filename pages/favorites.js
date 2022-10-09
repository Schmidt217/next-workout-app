import { useEffect, useState, useContext } from "react";
import { ExerciseContext } from "../context/state";
import ExerciseList from "../components/exercise-list";
import Spinner from "../components/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import NoUserPage from "../components/noUserPage";
import { auth } from "../firebase";

function Favorites(props) {
	const exerciseCtx = useContext(ExerciseContext);
	const [user] = useAuthState(auth);

	useEffect(() => {
		exerciseCtx.getFavoritesExercises();
	}, []);

	if (exerciseCtx.exercises.length < 0) {
		return <Spinner />;
	}

	return user ? (
		<>
			<h1
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Favorite Workouts
			</h1>
			{exerciseCtx.exercises?.length === 0 ? (
				"You have no favorited exercises. Search for exercises and press the star icon to favorite a workout!"
			) : (
				<ExerciseList
					exercises={exerciseCtx.exercises}
					setMyWorkout={props.setMyWorkout}
					myWorkout={props.myWorkout}
				/>
			)}
		</>
	) : (
		<NoUserPage />
	);
}

export default Favorites;
