import styled from "styled-components";

const ExerciseView = styled.div`
	display: grid;
	max-width: 1800px;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	grid-auto-rows: 1fr;
	padding: 1rem;
	margin: 0 auto;
	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export default ExerciseView;
