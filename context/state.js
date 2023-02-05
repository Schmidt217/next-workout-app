import { createContext, useState } from "react";
import { getExerciseData } from "../firebase";

export const ExerciseContext = createContext({});

const ExerciseContextProvider = ({ children }) => {
	const [favoriteExercises, setFavoriteExercises] = useState([]);
	const [exercises, setExercises] = useState("");

	const getExercises = async () => {
		const data = await getExerciseData();
		console.log("IS THIS THE FIRST SPOT?");
		setFavoriteExercises(data);
	};

	const refreshExercises = () => {
		getExercises();
	};

	const getFavoritesExercises = () => {
		getExerciseData()
			.then((data) => {
				setExercises(data);
			})
			.catch(() => {
				console.error("There was an error retrieving the data: ", error);
				return <h2>There was an error loading the favorites</h2>;
			});
	};

	const value = {
		refreshExercises,
		getExercises,
		getFavoritesExercises,
		favoriteExercises,
		exercises,
	};

	return (
		<ExerciseContext.Provider value={value}>
			{children}
		</ExerciseContext.Provider>
	);
};

export default ExerciseContextProvider;
