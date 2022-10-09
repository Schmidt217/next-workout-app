import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ExerciseList from "../../components/exercise-list";
import SearchExercise from "../../components/SearchExercise";
import Spinner from "../../components/Spinner";
import ErrorPage from "../../components/ErrorPage";

const ExerciseDetailPage = (props) => {
	const [exercises, setExercises] = useState([]);
	const router = useRouter();
	const { exercise } = router.query;

	useEffect(() => {
		async function search(text) {
			props.setLoading(true);
			const options = {
				method: "GET",
				url: `https://exercisedb.p.rapidapi.com/exercises/name/${text}`,
				headers: {
					"x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_HOST,
					"x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
				},
			};
			try {
				const res = await axios.request(options);

				let exercises = res.data;

				setExercises(exercises);
				props.setLoading(false);
			} catch (error) {
				props.setLoading(false);
				return <ErrorPage />;
			}
		}
		if (exercise) {
			search(exercise);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [exercise]);

	return (
		<>
			<SearchExercise exercise={exercise} />
			{props.loading ? (
				<Spinner width={250} height={250} />
			) : exercises.length === 0 ? (
				<h4 style={{ display: "flex", justifyContent: "center" }}>
					No exercise found with that search parameter. Try searching for
					something else!
				</h4>
			) : (
				<ExerciseList exercises={exercises} {...props} />
			)}
		</>
	);
};

export default ExerciseDetailPage;
