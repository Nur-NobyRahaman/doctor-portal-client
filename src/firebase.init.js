// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5wr2OA31q9DVxxFGduJVDQJJXghvWJxE",
    authDomain: "doctors-portal-c71d1.firebaseapp.com",
    projectId: "doctors-portal-c71d1",
    storageBucket: "doctors-portal-c71d1.appspot.com",
    messagingSenderId: "508805813905",
    appId: "1:508805813905:web:15024332db365f9d17d130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;