import styled from "styled-components";
import Image from "next/image";
import favoritedIcon from "../images/mark.png";
import { removeExerciseFromFavorites } from "../firebase";

const RemoveFavoritesBtn = ({
	exercise,
	refreshExercises,
	getFavoritesExercises,
}) => {
	return (
		<Button
			onClick={() => {
				removeExerciseFromFavorites(exercise.id);
				refreshExercises();
				getFavoritesExercises();
			}}
		>
			<Image alt="favorites" src={favoritedIcon} width={25} height={20} />
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
	left: 40%;
	padding: 0.8rem 1.5rem;
	transition: all 0.5s;
`;

export default RemoveFavoritesBtn;
