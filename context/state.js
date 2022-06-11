import { createContext, useState } from "react";

export const AddExerciseContext = createContext({
	id: [],
	addWorkout: (id) => {},
	removeWorkout: (id) => {},
});

const AddExerciseContextProvider = ({ children }) => {
	const [addedExercises, setAddedExercises] = useState([]);

	const addExercise = (id) => {
		setAddedExercises((currentExercises) => [...currentExercises, id]);
	};

	const removeExercise = (id) => {
		setAddedExercises((selectedExerciseId) =>
			selectedExerciseId.filter((ExerciseId) => ExerciseId !== id)
		);
	};

	const value = {
		// ids: exercise.id,
		addExercise,
		removeExercise,
	};

	return (
		<AddExerciseContext.Provider value={value}>
			{children}
		</AddExerciseContext.Provider>
	);
};

export default AddExerciseContextProvider;
