"use client"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADLkUx46RcLZ636YLinML71Pvfp7RrjE4",
  authDomain: "client-1321c.firebaseapp.com",
  projectId: "client-1321c",
  storageBucket: "client-1321c.firebasestorage.app",
  messagingSenderId: "671741938543",
  appId: "1:671741938543:web:2fd6f990b4b2b4fc5b769a",
  measurementId: "G-59T5993E79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export default app
