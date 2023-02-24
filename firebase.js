import { initializeApp } from "firebase/app";
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithEmailAndPassword,
	getAuth,
	signOut,
} from "firebase/auth";
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
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// - LOGIN METHODS

export function googleSignIn() {
	signInWithPopup(auth, googleProvider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			if (error) {
				if (errorMessage === "Firebase: Error (auth/popup-closed-by-user).")
					return;
				return toast.error(errorMessage, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
}

export function facebookSignIn() {
	signInWithPopup(auth, facebookProvider)
		.then((result) => {
			// The signed-in user info.
			const user = result.user;
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			const credential = FacebookAuthProvider.credentialFromResult(result);
			const accessToken = credential.accessToken;
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = FacebookAuthProvider.credentialFromError(error);
			if (error) {
				console.log(errorMessage);
				if (errorMessage === "Firebase: Error (auth/popup-closed-by-user).")
					return;
				return toast.error(errorMessage, {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		});
}

export function emailSignIn(email, password) {
	signInWithEmailAndPassword(auth, email, password).catch((error) => {
		console.log(error);
		return toast.error("Incorrect email or password", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	});
}

// - DATABASE METHODS

export async function addExerciseToFavorites(workoutData) {
	try {
		const res = await setDoc(doc(db, auth.currentUser.uid, workoutData.id), {
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
	const docRef = doc(db, auth.currentUser.uid, exerciseId);
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
		const querySnapshot = await getDocs(collection(db, auth.currentUser.uid));
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

export { auth };
