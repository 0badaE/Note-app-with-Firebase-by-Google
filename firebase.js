import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKReSLJ1a54sEE6MgEvw0K629PApPHl1s",
  authDomain: "fair-veld-268706.firebaseapp.com",
  projectId: "fair-veld-268706",
  storageBucket: "fair-veld-268706.appspot.com",
  messagingSenderId: "993703558487",
  appId: "1:993703558487:web:a7447565552528d98dd212"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")