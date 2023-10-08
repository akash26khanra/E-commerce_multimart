import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHoAe6Tc1lHFQpSyBLLcBvF7QrkTAg4cs",
  authDomain: "ecommerce-9e67b.firebaseapp.com",
  projectId: "ecommerce-9e67b",
  storageBucket: "ecommerce-9e67b.appspot.com",
  messagingSenderId: "827868478765",
  appId: "1:827868478765:web:8da36ce2a7ed2d44bee7a4",
  measurementId: "G-DG4P0S4YJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
