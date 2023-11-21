// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU8FSIu7a341XYTTuXblZp-dlr39Be-cA",
  authDomain: "think-e4195.firebaseapp.com",
  projectId: "think-e4195",
  storageBucket: "think-e4195.appspot.com",
  messagingSenderId: "671285547769",
  appId: "1:671285547769:web:5ccde9c1c049eef2634828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
