import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
  /* YOUR FIREBASE CONFIG OBJECT HERE */
  apiKey: "AIzaSyB80pobXiKZQKcm59pwkTpL7kaSm_JD3v4",
  authDomain: "branch-chat-example.firebaseapp.com",
  projectId: "branch-chat-example",
  storageBucket: "branch-chat-example.appspot.com",
  messagingSenderId: "531800860083",
  appId: "1:531800860083:web:52d4e69ae48f7a65b217c6",
  measurementId: "G-H38EG9WPHT",
  databaseURL: "https://branch-chat-example-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, database };