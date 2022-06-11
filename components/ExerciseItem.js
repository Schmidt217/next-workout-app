import { useRouter } from "next/router";
import AddToWorkoutBtn from "../ui/AddToWorkoutBtn";
import RemoveFromWorkoutBtn from "../ui/RemoveFromWorkoutBtn";
import Reps from "./Reps";
import ExerciseCard from "./styles/ExerciseCard";

const ExerciseItem = (props) => {
	const router = useRouter();
	const { gifUrl, name, equipment, id, target } = props.exercise;
	const { myWorkout, setMyWorkout } = props;

	const isAddedToWorkout = myWorkout?.find((item) => item.id === id);

	return (
		<ExerciseCard>
			<div>
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
					<>
						{/* {router.pathname === "/workout" && (
						<Reps sets={sets} setSets={setSets} reps={reps} setReps={setReps} />
					)} */}
						<RemoveFromWorkoutBtn
							myWorkout={myWorkout}
							exercise={props.exercise}
							setMyWorkout={setMyWorkout}
						/>
					</>
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
