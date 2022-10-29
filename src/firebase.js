import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq4lrjzOWc5xhCl9nLvb3kkBkBwrlD3CY",
  authDomain: "todo-app-65767.firebaseapp.com",
  projectId: "todo-app-65767",
  storageBucket: "todo-app-65767.appspot.com",
  messagingSenderId: "503128840191",
  appId: "1:503128840191:web:338b5d52b50c5da2b579ca",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
