import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
	getFirestore,
	getDocs,
	collection,
	deleteDoc,
	doc,
	setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

const workoutRef = collection(db, "favoriteWorkouts");

export async function addExerciseToFavorites(workoutData) {
	try {
		const res = await setDoc(doc(db, "favoriteWorkouts", workoutData.id), {
			bodyPart: workoutData.bodyPart,
			equipment: workoutData.equipment,
			gifUrl: workoutData.gifUrl,
			id: workoutData.id,
			name: workoutData.name,
			target: workoutData.target,
		});

		toast.success("Workout Added to Favorites!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		return res;
	} catch (error) {
		console.error(error);
		toast.error(error.message, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	}
}

export async function removeExerciseFromFavorites(exerciseId) {
	const docRef = doc(db, "favoriteWorkouts", exerciseId);
	try {
		await deleteDoc(docRef);
		toast.success("Workout Removed From Favorites!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	} catch (error) {
		toast.error(error.message, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	}
}

export async function getExerciseData() {
	try {
		let exerciseList = [];
		const querySnapshot = await getDocs(workoutRef);
		querySnapshot.forEach((doc) => {
			exerciseList.push(doc.data());
		});
		return exerciseList;
	} catch (error) {
		console.error(error);
	}
}

export const logout = () => {
	signOut(auth);
};
