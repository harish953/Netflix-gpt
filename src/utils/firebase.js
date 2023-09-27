// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAgQC01Gg670-EZpV6pshzSwGkzt152FE",
  authDomain: "netflixgpt-6714c.firebaseapp.com",
  projectId: "netflixgpt-6714c",
  storageBucket: "netflixgpt-6714c.appspot.com",
  messagingSenderId: "549339725498",
  appId: "1:549339725498:web:806bfa12726dbe30078c83",
  measurementId: "G-VLY8NZ0606",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
