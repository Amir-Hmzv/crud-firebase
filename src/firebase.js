// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDFeG9XuiHWNfShG-mlSBfisui3g5eMc",
  authDomain: "todo-app-yt-229c3.firebaseapp.com",
  projectId: "todo-app-yt-229c3",
  storageBucket: "todo-app-yt-229c3.appspot.com",
  messagingSenderId: "981613194409",
  appId: "1:981613194409:web:f6e6c2a5fd8a12368fcdb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
