// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkbl07PHAqNQKFBfTBUqxJpHH5XElgm58",
  authDomain: "to-do-list-639b7.firebaseapp.com",
  projectId: "to-do-list-639b7",
  storageBucket: "to-do-list-639b7.firebasestorage.app",
  messagingSenderId: "546111682575",
  appId: "1:546111682575:web:3269c40f643b16d4c14b7a",
  measurementId: "G-1RQC2GCPBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
