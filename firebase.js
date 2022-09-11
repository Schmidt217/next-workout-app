import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
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

export async function addExerciseData(workoutData) {
	console.log(db);
	try {
		const docRef = await addDoc(collection(db, "saveWorkouts"), {
			workoutName: "Workout Name",
			bodyPart: workoutData.bodyPart,
			equipment: workoutData.equipment,
			gifUrl: workoutData.gifUrl,
			id: workoutData.id,
			name: workoutData.name,
			target: workoutData.target,
		});
		console.log("Document written with ID: ", docRef.id);
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

export async function getName() {
	try {
		const querySnapshot = await getDocs(collection(db, auth.currentUser.uid));
		console.log({
			...querySnapshot.docs[0]._document.data.value.mapValue.fields.name,
		});
		return {
			...querySnapshot.docs[0]._document.data.value.mapValue.fields.name,
		};
	} catch (e) {
		console.log(e);
	}
}

export async function getExerciseData() {
	try {
		const querySnapshot = await getDocs(collection(db, "saveWorkouts"));
		querySnapshot.forEach((doc) => {
			console.log(doc._document.data.value.mapValue.fields);
		});
	} catch (error) {
		console.log(error);
	}
}

export const logout = () => {
	signOut(auth);
};
