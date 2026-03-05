// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQA4VOP4SZuWVmuvlfasNPkNF7GghwDBI",
  authDomain: "coffee-store-4d2f4.firebaseapp.com",
  projectId: "coffee-store-4d2f4",
  storageBucket: "coffee-store-4d2f4.firebasestorage.app",
  messagingSenderId: "1757786148",
  appId: "1:1757786148:web:67cac1f85b1d8f78d468b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;