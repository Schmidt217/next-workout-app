/* eslint-disable @next/next/no-img-element */
import { useEffect, useContext } from "react";
import AddToWorkoutBtn from "../ui/AddToWorkoutBtn";
import AddFavoritesBtn from "../ui/AddFavoritesBtn";
import RemoveFromWorkoutBtn from "../ui/RemoveFromWorkoutBtn";
import ExerciseCard from "./styles/ExerciseCard";
import ExerciseInfo from "./styles/ExerciseInfo";
import RemoveFavoritesBtn from "../ui/RemoveFavoritesBtn";
import { ExerciseContext } from "../context/state";

const ExerciseItem = (props) => {
	const { gifUrl, name, equipment, id, target } = props.exercise;
	const { myWorkout, setMyWorkout } = props;
	const exerciseCtx = useContext(ExerciseContext);

	useEffect(() => {
		exerciseCtx.getExercises();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const isAddedToWorkout = myWorkout?.find((item) => item.id === id);
	const isAddedToFavorites = exerciseCtx.favoriteExercises?.find(
		(item) => item.id === id
	);

	return (
		<ExerciseCard>
			<ExerciseInfo>
				{isAddedToFavorites ? (
					<RemoveFavoritesBtn
						exercise={props.exercise}
						refreshExercises={exerciseCtx.refreshExercises}
						getFavoritesExercises={exerciseCtx.getFavoritesExercises}
					/>
				) : (
					<AddFavoritesBtn
						exercise={props.exercise}
						refreshExercises={exerciseCtx.refreshExercises}
					/>
				)}

				<img
					src={gifUrl}
					alt="Exercise GIF"
					style={{
						width: "250px",
						display: "flex",
						margin: "auto",
						borderRadius: 10,
						boxShadow: "5px 5px 10px #bbb",
					}}
				/>
				<h2
					style={{
						height: "60px",
					}}
				>
					{name.toUpperCase()}
				</h2>
				<p>Muscle Worked: {target.charAt(0).toUpperCase() + target.slice(1)}</p>
				<p>
					Equipment Used:{" "}
					{equipment.charAt(0).toUpperCase() + equipment.slice(1)}
				</p>

				{isAddedToWorkout ? (
					<RemoveFromWorkoutBtn
						myWorkout={myWorkout}
						exercise={props.exercise}
						setMyWorkout={setMyWorkout}
					/>
				) : (
					<AddToWorkoutBtn
						exercise={props.exercise}
						setMyWorkout={setMyWorkout}
					/>
				)}
			</ExerciseInfo>
		</ExerciseCard>
	);
};

export default ExerciseItem;
