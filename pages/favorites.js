import { useEffect, useState } from "react";
import { getExerciseData } from "../firebase";
import ExerciseList from "../components/exercise-list";

function Favorites(props) {
	const [exercises, setExercises] = useState("");

	const getExercises = async () => {
		const data = await getExerciseData();
		setExercises(data);
	};

	useEffect(() => {
		getExercises();
	}, [exercises]);

	return (
		<>
			<h1>Favorites</h1>
			{exercises.length === 0 ? (
				"You have no favorited exercises. Search for exercises and press the star icon to favorite a workout!"
			) : (
				<ExerciseList
					exercises={exercises}
					setMyWorkout={props.setMyWorkout}
					myWorkout={props.myWorkout}
				/>
			)}
		</>
	);
}

export default Favorites;
