import styled from "styled-components";

function SaveBtn({ setSaveWorkoutModal }) {
	return (
		<Button
			onClick={() => {
				setSaveWorkoutModal(true);
			}}
		>
			Save Workout
		</Button>
	);
}

const Button = styled.button`
	background: green;
	color: #222;
	cursor: pointer;
	border: 0;
	border-radius: 10px;
	display: flex;
	margin: 0 auto;
	margin-top: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
	&:active {
		opacity: 0.7;
	}
	&[disabled] {
		opacity: 0.5;
	}
`;

export default SaveBtn;
