import { useEffect } from "react";
import { useRouter } from "next/router";
import AddToWorkoutBtn from "../ui/AddToWorkoutBtn";
import AddFavoritesBtn from "../ui/AddFavoritesBtn";
import RemoveFromWorkoutBtn from "../ui/RemoveFromWorkoutBtn";
import ExerciseCard from "./styles/ExerciseCard";
import RemoveFavoritesBtn from "../ui/RemoveFavoritesBtn";
import { getExerciseData } from "../firebase";

// TODO: add a 'favorites' button and connect it to firestore

const ExerciseItem = (props) => {
	const router = useRouter();
	const { gifUrl, name, equipment, id, target } = props.exercise;
	const { myWorkout, setMyWorkout } = props;

	// let exerciseData;

	// useEffect(() => {
	// 	const getExercises = async () => {
	// 		exerciseData = await getExerciseData();
	// 	};
	// 	getExercises();
	// }, [exerciseData]);

	const isAddedToWorkout = myWorkout?.find((item) => item.id === id);
	// const isAddedToFavorites = exerciseData?.find((item) => console.log(item));

	return (
		<ExerciseCard>
			<div>
				{/* {isAddedToFavorites ? (
					<RemoveFavoritesBtn exercise={props.exercise} />
				) : (
					<AddFavoritesBtn exercise={props.exercise} />
				)} */}
				<img
					src={gifUrl}
					alt="Exercise GIF"
					style={{
						width: "250px",
						display: "flex",
						margin: "auto",
						borderRadius: 10,
					}}
				/>
				<h2
					style={{ display: "flex", justifyContent: "center", height: "60px" }}
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
			</div>
		</ExerciseCard>
	);
};

export default ExerciseItem;
