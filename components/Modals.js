/* eslint-disable react/no-unescaped-entities */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const ClearExercisesModal = ({
	clearExercisesModal,
	setClearExercisesModal,
	setMyWorkout,
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
							Confirm
						</ClearWorkout>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

const ClearWorkout = styled.button`
	background: #e74c3c;
	color: #fff;
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
