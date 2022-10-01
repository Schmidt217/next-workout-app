import { useEffect, useState, useContext } from "react";
import { ExerciseContext } from "../context/state";
import ExerciseList from "../components/exercise-list";
import Spinner from "../components/Spinner";

function Favorites(props) {
	const exerciseCtx = useContext(ExerciseContext);

	useEffect(() => {
		exerciseCtx.getFavoritesExercises();
	}, []);

	if (exerciseCtx.loading) {
		return <Spinner />;
	}

	return (
		<>
			<h1>Favorite Workouts</h1>
			{exerciseCtx.exercises.length === 0 ? (
				"You have no favorited exercises. Search for exercises and press the star icon to favorite a workout!"
			) : (
				<ExerciseList
					exercises={exerciseCtx.exercises}
					setMyWorkout={props.setMyWorkout}
					myWorkout={props.myWorkout}
				/>
			)}
		</>
	);
}

export default Favorites;
