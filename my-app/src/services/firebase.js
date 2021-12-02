import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGI2SdQgXT3owCm8hAf2AMB7H1Lj3r4HU",
    authDomain: "gb-msngr.firebaseapp.com",
    projectId: "gb-msngr",
    storageBucket: "gb-msngr.appspot.com",
    messagingSenderId: "89247021547",
    appId: "1:89247021547:web:bd2201911de286699f81ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
    await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
    await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);
