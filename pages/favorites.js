import { useEffect, useContext } from "react";
import { ExerciseContext } from "../context/state";
import ExerciseList from "../components/exercise-list";
import Spinner from "../components/Spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import NoUserPage from "../components/NoUserPage";
import { auth } from "../firebase";

function Favorites(props) {
	const exerciseCtx = useContext(ExerciseContext);
	const [user] = useAuthState(auth);

	useEffect(() => {
		exerciseCtx.getFavoritesExercises();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (exerciseCtx.exercises?.length < 0) {
		return <Spinner />;
	}

	return user ? (
		<div style={{ height: "100vh" }}>
			<h1
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Favorite Workouts
			</h1>
			{exerciseCtx.exercises?.length === 0 ? (
				<p style={{ textAlign: "center" }}>
					You have no favorited exercises. Search for exercises and press the
					star icon to favorite a workout!
				</p>
			) : (
				<ExerciseList
					exercises={exerciseCtx.exercises}
					setMyWorkout={props.setMyWorkout}
					myWorkout={props.myWorkout}
				/>
			)}
		</div>
	) : (
		<NoUserPage />
	);
}

export default Favorites;
