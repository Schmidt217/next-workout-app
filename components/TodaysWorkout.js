import { useState } from "react";
import ClearWorkoutBtn from "../ui/ClearWorkoutBtn";
import SaveBtn from "../ui/SaveBtn";
import ExerciseItem from "./ExerciseItem";
import Modal from "./Modal";
import ExerciseView from "./styles/ExerciseView";
import { useLocalStorage } from "./useLocalStorage";

const TodaysWorkout = ({ myWorkout, setMyWorkout }) => {
	const [clearExercisesModal, setClearExercisesModal] = useState(false);
	const [saveWorkoutModal, setSaveWorkoutModal] = useState(false);
	return (
		<div>
			{clearExercisesModal && (
				<Modal>
					<h1>
						Are you sure you want to remove all exercises from today's workout?
					</h1>
					<p>This action cannot be undone.</p>
					<button onClick={() => setClearExercisesModal(false)}>Cancel</button>
					<button
						onClick={() => {
							setClearExercisesModal(false);
							setMyWorkout((currentState) => {
								const newState = [...currentState];
								newState.length = 0;
								localStorage.setItem("exercise", JSON.stringify(newState));
								return newState;
							});
						}}
					>
						Confim
					</button>
				</Modal>
			)}
			{saveWorkoutModal && (
				<Modal>
					<input type="text" />
				</Modal>
			)}
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
