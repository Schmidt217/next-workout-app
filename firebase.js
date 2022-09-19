import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
	getFirestore,
	getDocs,
	collection,
	addDoc,
	where,
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
	measurementId: "G-Z03G59QY6P",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

const workoutRef = collection(db, "favoriteWorkouts");

export async function addExerciseToFavorites(workoutData) {
	try {
		await setDoc(doc(db, "favoriteWorkouts", workoutData.id), {
			bodyPart: workoutData.bodyPart,
			equipment: workoutData.equipment,
			gifUrl: workoutData.gifUrl,
			id: workoutData.id,
			name: workoutData.name,
			target: workoutData.target,
		});

		return toast.success("Workout Saved!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	} catch (error) {
		console.error(error);
		return toast.error(error.message, {
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
		console.log(exerciseId);
		await deleteDoc(docRef);
		console.log(docRef);
		console.log("Delete Successful");
	} catch (error) {
		console.log(error);
	}
}

export async function getExerciseData() {
	try {
		let exerciseList = [];
		const querySnapshot = await getDocs(workoutRef);
		querySnapshot.forEach((doc) => {
			exerciseList.push(doc.data());
		});
		console.log(exerciseList);
		return exerciseList;
	} catch (error) {
		console.log(error);
	}
}

export const logout = () => {
	signOut(auth);
};
