import { useState } from "react";

import ExerciseItem from "./ExerciseItem";
import ExerciseView from "./styles/ExerciseView";
import ClearWorkoutBtn from "../ui/ClearWorkoutBtn";
import SaveBtn from "../ui/SaveBtn";
import { ClearExercisesModal, SaveWorkoutModal } from "./Modals";

const TodaysWorkout = ({ myWorkout, setMyWorkout }) => {
	const [clearExercisesModal, setClearExercisesModal] = useState(false);
	const [saveWorkoutModal, setSaveWorkoutModal] = useState(false);
	const [workoutName, setWorkoutName] = useState("");

	function updateWorkoutName(e) {
		setWorkoutName(e.target.value);
	}

	return (
		<div>
			<ClearExercisesModal
				clearExercisesModal={clearExercisesModal}
				setClearExercisesModal={setClearExercisesModal}
			/>

			<SaveWorkoutModal
				saveWorkoutModal={saveWorkoutModal}
				setSaveWorkoutModal={setSaveWorkoutModal}
				workoutName={workoutName}
				updateWorkoutName={updateWorkoutName}
				workoutData={myWorkout}
			/>

			{myWorkout?.length === 0 && (
				<h3 style={{ display: "flex", justifyContent: "center" }}>
					No Exercise Added. Search an exercise and add it to display it here.
				</h3>
			)}

			{myWorkout?.length > 0 && (
				<>
					<div
						style={{
							margin: "0 auto",
							margin: "20px",
							maxWidth: "1800px",
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<ClearWorkoutBtn setClearExercisesModal={setClearExercisesModal} />
					</div>

					<ExerciseView>
						{myWorkout.map((exercise) => (
							<ExerciseItem
								key={exercise.id}
								exercise={exercise}
								setMyWorkout={setMyWorkout}
								myWorkout={myWorkout}
							/>
						))}
					</ExerciseView>
					<SaveBtn setSaveWorkoutModal={setSaveWorkoutModal} />
				</>
			)}
		</div>
	);
};

export default TodaysWorkout;
