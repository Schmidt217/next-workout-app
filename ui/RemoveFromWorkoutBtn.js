import styled from "styled-components";

const RemoveFromWorkoutBtn = ({ myWorkout, setMyWorkout, exercise }) => {
	return (
		<Button
			style={{ marginTop: "20px" }}
			onClick={() => {
				setMyWorkout(myWorkout.filter((workout) => workout.id !== exercise.id));
			}}
		>
			Remove From Workout
		</Button>
	);
};

const Button = styled.button`
	background: #fcba03;
	color: #222;
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
	&[disabled] {
		opacity: 0.5;
	}
`;

export default RemoveFromWorkoutBtn;
