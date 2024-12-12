/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwdExRcKCLSDZBGL881YQlhNv1i-hP6zU",
  authDomain: "reactjs-a98b0.firebaseapp.com",
  projectId: "reactjs-a98b0",
  storageBucket: "reactjs-a98b0.appspot.com",
  messagingSenderId: "337399762586",
  appId: "1:337399762586:web:f77c569c80b9d497449923",
  measurementId: "G-0BNP2NZ9C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
const storage = getStorage(app);
export { app, auth, provider, database, storage }
