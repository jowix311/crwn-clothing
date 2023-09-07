import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkAnqqKcDAnyiEJPp6X94ujfgY68c71c",
  authDomain: "crown-clothing-db-2eff7.firebaseapp.com",
  projectId: "crown-clothing-db-2eff7",
  storageBucket: "crown-clothing-db-2eff7.appspot.com",
  messagingSenderId: "116110023200",
  appId: "1:116110023200:web:44e63e597e73d91e3dba45",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Auth
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleAuthProvider);
//Firestore
export const db = getFirestore(); //db is singleton instance

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocumentRef);

  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, { displayName, email, createdAt });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }

  return userDocumentRef;
};
