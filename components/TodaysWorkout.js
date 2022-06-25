import { useState } from "react";
import styled from "styled-components";
import ClearWorkoutBtn from "../ui/ClearWorkoutBtn";
import SaveBtn from "../ui/SaveBtn";
import ExerciseItem from "./ExerciseItem";
import ExerciseView from "./styles/ExerciseView";
import { useLocalStorage } from "./useLocalStorage";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const TodaysWorkout = ({ myWorkout, setMyWorkout }) => {
	const [clearExercisesModal, setClearExercisesModal] = useState(false);
	const [saveWorkoutModal, setSaveWorkoutModal] = useState(false);

	return (
		<div>
			<Modal
				open={clearExercisesModal}
				onClose={() => setClearExercisesModal(false)}
				aria-labelledby="modal-modal-clear-exercises"
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
							Are you sure you want to remove all exercises from today's
							workout?
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

export default TodaysWorkout;
