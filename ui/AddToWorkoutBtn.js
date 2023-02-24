import styled from "styled-components";

const AddToWorkoutBtn = (props) => {
	return (
		<Button
			style={{ marginTop: "20px" }}
			onClick={() => {
				props.setMyWorkout((currentState) => {
					const newState = [...currentState];
					newState.push(props.exercise);
					localStorage.setItem("exercise", JSON.stringify(newState));
					return newState;
				});
			}}
		>
			Add to Workout
		</Button>
	);
};

const Button = styled.button`
	background: #e74c3c;
	color: white;
	cursor: pointer;
	font-weight: 500;
	border: 0;
	border-radius: 5px;
	display: flex;
	margin: 0 auto;
	text-transform: uppercase;
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
`;

export default AddToWorkoutBtn;
