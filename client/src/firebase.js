// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "housingservices-6c1cf.firebaseapp.com",
  projectId: "housingservices-6c1cf",
  storageBucket: "housingservices-6c1cf.appspot.com",
  messagingSenderId: "92548283822",
  appId: "1:92548283822:web:84c7d91eccd95c4635dc3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);