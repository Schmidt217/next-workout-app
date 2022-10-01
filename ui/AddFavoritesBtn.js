import styled from "styled-components";
import Image from "next/image";
import starIcon from "../images/star.png";
import { addExerciseToFavorites } from "../firebase";

const AddFavoritesBtn = ({ exercise, refreshExercises }) => {
	return (
		<Button
			onClick={() => {
				addExerciseToFavorites(exercise);
				refreshExercises();
			}}
		>
			<Image alt="favorites" src={starIcon} width={25} height={20} />
		</Button>
	);
};

const Button = styled.button`
	background: transparent;
	cursor: pointer;
	font-weight: 500;
	border: 0;
	border-radius: 5px;
	position: relative;
	left: 100%;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
`;

export default AddFavoritesBtn;
