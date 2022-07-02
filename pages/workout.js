import TodaysWorkout from "../components/TodaysWorkout";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import NoUserPage from "../components/noUserPage";

const workout = (props) => {
	const [user] = useAuthState(auth);
	return user ? <TodaysWorkout {...props} /> : <NoUserPage />;
};

export default workout;
