// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTUmLdmXgYWr5ZdiPps7CPWOdnbkuB8RY",
  authDomain: "drc-project-d08da.firebaseapp.com",
  projectId: "drc-project-d08da",
  storageBucket: "drc-project-d08da.appspot.com",
  messagingSenderId: "991178808969",
  appId: "1:991178808969:web:ab4f2c060b00715448b058",
  measurementId: "G-YDHXB2Q6BZ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getDatabase(firebaseApp);
const auth = getAuth();

export { auth, analytics, provider, db };
