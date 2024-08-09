// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import other services as needed
 import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// import { db } from "./firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBJ0NR2ELZjEf5oRj1sNBrmaocGR2FqCk",
  authDomain: "logistics-warehouse-management.firebaseapp.com",
  databaseURL: "https://logistics-warehouse-management-default-rtdb.firebaseio.com",
  projectId: "logistics-warehouse-management",
  storageBucket: "logistics-warehouse-management.appspot.com",
  messagingSenderId: "765510238129",
  appId: "1:765510238129:web:d07cd147216a984a5f8790",
  measurementId: "G-PW4Y54HSL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (or other services you need)
const db = getFirestore(app);

// Export the initialized Firebase services
export { db };
