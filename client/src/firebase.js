// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-da023.firebaseapp.com",
  projectId: "mern-estate-da023",
  storageBucket: "mern-estate-da023.appspot.com",
  messagingSenderId: "629594650382",
  appId: "1:629594650382:web:7fb57569c1c55d0500895f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);