// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQKrgj0pSSB4dwbtbKVcg9e-APZMZgiE",
  authDomain: "netflixgpt-387e3.firebaseapp.com",
  projectId: "netflixgpt-387e3",
  storageBucket: "netflixgpt-387e3.firebasestorage.app",
  messagingSenderId: "790907722102",
  appId: "1:790907722102:web:a58b95e598a9d84f0c0257",
  measurementId: "G-B8M4ZY6DCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
