// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIY01Z4P-6G5-2XWlVYbtQmQHO1IFhi5Q",
  authDomain: "lista-produtos-3b-2026.firebaseapp.com",
  projectId: "lista-produtos-3b-2026",
  storageBucket: "lista-produtos-3b-2026.firebasestorage.app",
  messagingSenderId: "398826503329",
  appId: "1:398826503329:web:012c17da8cd987b7ec84e0",
  measurementId: "G-TQDQ960Q0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);