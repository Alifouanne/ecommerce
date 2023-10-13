/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;