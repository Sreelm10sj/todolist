
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkbl07PHAqNQKFBfTBUqxJpHH5XElgm58",
  authDomain: "to-do-list-639b7.firebaseapp.com",
  projectId: "to-do-list-639b7",
  storageBucket: "to-do-list-639b7.firebasestorage.app",
  messagingSenderId: "546111682575",
  appId: "1:546111682575:web:3269c40f643b16d4c14b7a",
  measurementId: "G-1RQC2GCPBM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
