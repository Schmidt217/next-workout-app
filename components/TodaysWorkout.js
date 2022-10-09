import { useState } from "react";

import ExerciseItem from "./ExerciseItem";
import ExerciseView from "./styles/ExerciseView";
import ClearWorkoutBtn from "../ui/ClearWorkoutBtn";
import { ClearExercisesModal } from "./Modals";

// TODO: make save workout modal function

const TodaysWorkout = ({ myWorkout, setMyWorkout }) => {
	const [clearExercisesModal, setClearExercisesModal] = useState(false);

	return (
		<div>
			<ClearExercisesModal
				clearExercisesModal={clearExercisesModal}
				setClearExercisesModal={setClearExercisesModal}
				setMyWorkout={setMyWorkout}
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
				</>
			)}
		</div>
	);
};

export default TodaysWorkout;
