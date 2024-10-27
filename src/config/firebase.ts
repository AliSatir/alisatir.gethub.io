// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCER5yrTabJRjeZvpcFhJOC5Y2nL6WB4p4",
  authDomain: "react-projesi-89adf.firebaseapp.com",
  projectId: "react-projesi-89adf",
  storageBucket: "react-projesi-89adf.appspot.com",
  messagingSenderId: "789648079437",
  appId: "1:789648079437:web:1e1e00fbaf9b333a4f7a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);

export const provider= new GoogleAuthProvider();

export const db = getFirestore(app);