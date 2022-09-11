import TodaysWorkout from "../components/TodaysWorkout";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NoUserPage from "../components/noUserPage";

const Workout = (props) => {
	const [user] = useAuthState(auth);
	return user ? <TodaysWorkout {...props} /> : <NoUserPage />;
};

export default Workout;
