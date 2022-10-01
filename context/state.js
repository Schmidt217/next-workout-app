import { createContext, useState } from "react";
import { getExerciseData } from "../firebase";

export const ExerciseContext = createContext({});

const ExerciseContextProvider = ({ children }) => {
	const [favoriteExercises, setFavoriteExercises] = useState([]);
	const [exercises, setExercises] = useState("");
	const [loading, setLoading] = useState(false);

	const getExercises = async () => {
		const data = await getExerciseData();
		setFavoriteExercises(data);
	};

	const refreshExercises = () => {
		getExercises();
	};

	const getFavoritesExercises = () => {
		setLoading(true);
		getExerciseData()
			.then((data) => {
				setExercises(data);
				setLoading(false);
				console.log(data);
			})
			.catch(() => {
				setLoading(false);
				console.error("There was an error retrieving the data: ", error);
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
