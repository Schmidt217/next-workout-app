import styled from "styled-components";

function ClearWorkoutBtn({ setClearExercisesModal }) {
	return (
		<Button onClick={() => setClearExercisesModal(true)}>
			Clear All Exercises
		</Button>
	);
}

const Button = styled.button`
	background: red;
	color: #222;
	font-weight: bold;
	cursor: pointer;
	border: 0;
	border-radius: 5px;
	text-transform: uppercase;
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
`;

export default ClearWorkoutBtn;
