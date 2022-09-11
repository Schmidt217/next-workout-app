import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { addExerciseData } from "../firebase";

export const ClearExercisesModal = ({
	clearExercisesModal,
	setClearExercisesModal,
}) => {
	return (
		<Modal
			open={clearExercisesModal}
			onClose={() => setClearExercisesModal(false)}
			aria-labelledby="modal-clear-exercises"
			sx={{ top: "25%" }}
		>
			<Box
				component="div"
				sx={{
					backgroundColor: "white",
					display: "flex",
					padding: "5rem",
					margin: "0 auto",
					width: "75%",
					borderRadius: "10px",
					boxShadow: 10,
					alignItems: "center",
				}}
			>
				<div>
					<h1 style={{ justifyContent: "center" }}>
						Are you sure you want to remove all exercises from today's workout?
					</h1>
					<p>This action cannot be undone.</p>
					<div style={{ display: "flex", justifyContent: "flex-end" }}>
						<CancelClearWorkoutBtn
							onClick={() => setClearExercisesModal(false)}
						>
							Cancel
						</CancelClearWorkoutBtn>
						<ClearWorkout
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
						</ClearWorkout>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

export const SaveWorkoutModal = ({
	saveWorkoutModal,
	setSaveWorkoutModal,
	workoutName,
	updateWorkoutName,
	workoutData,
}) => {
	function addExercisesToDb() {
		workoutData.forEach((exercise) => {
			console.log(exercise);
			addExerciseData(exercise).then(setSaveWorkoutModal(false));
		});
	}
	return (
		<Modal
			open={saveWorkoutModal}
			onClose={() => setSaveWorkoutModal(false)}
			aria-labelledby="modal-save-workout"
			sx={{ top: "25%" }}
		>
			<Box
				component="div"
				sx={{
					backgroundColor: "white",
					display: "flex",
					padding: "5rem",
					margin: "0 auto",
					width: "75%",
					borderRadius: "10px",
					boxShadow: 10,
					alignItems: "center",
				}}
			>
				<div>
					<h1 style={{ justifyContent: "center" }}>Save all the workouts!!!</h1>
					<form onSubmit={() => {}}>
						<input
							type="text"
							name="text"
							placeholder="Workout Name"
							required
							value={workoutName}
							onChange={updateWorkoutName}
						/>
					</form>
					<div style={{ display: "flex", justifyContent: "flex-end" }}>
						<CancelClearWorkoutBtn onClick={() => setSaveWorkoutModal(false)}>
							Cancel
						</CancelClearWorkoutBtn>
						<ClearWorkout onClick={() => addExercisesToDb()}>
							Confim
						</ClearWorkout>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

const ClearWorkout = styled.button`
	background: red;
	color: #222;
	cursor: pointer;
	border: 0;
	border-radius: 10px;
	font-weight: bold;
	margin-top: 1rem;
	margin-left: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
	&:active {
		opacity: 0.7;
	}
`;

const CancelClearWorkoutBtn = styled.button`
	background: #ccc;
	color: #222;
	cursor: pointer;
	border: 0;
	border-radius: 10px;
	margin-top: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
	&:active {
		opacity: 0.7;
	}
`;
