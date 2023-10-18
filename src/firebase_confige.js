// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeCUEx-kWOJBTediwTXID8kyyqjqzKo8E",
  authDomain: "dragon-news-project-945f0.firebaseapp.com",
  projectId: "dragon-news-project-945f0",
  storageBucket: "dragon-news-project-945f0.appspot.com",
  messagingSenderId: "832727646987",
  appId: "1:832727646987:web:8aaf296870808327d6580e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;