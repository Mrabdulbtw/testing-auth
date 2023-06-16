// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTl7m2RzFXQQcLmgi0m0RwnlwBUivP07c",
  authDomain: "testing-auth-e9de6.firebaseapp.com",
  projectId: "testing-auth-e9de6",
  storageBucket: "testing-auth-e9de6.appspot.com",
  messagingSenderId: "453922768423",
  appId: "1:453922768423:web:3c8453201dc84360dcb002",
  measurementId: "G-3SP8RE9YEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider= new GoogleAuthProvider
