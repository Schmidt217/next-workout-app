import { useEffect } from "react";
import { getExerciseData } from "../firebase";

function SavedWorkoutsCollection() {
	useEffect(() => {
		async function getData() {
			const data = await getExerciseData();

			return data;
		}
		getData();
	}, []);
	return <h1>savedWorkoutsCollection</h1>;
}

export default SavedWorkoutsCollection;
