// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzl8rY0G0UvD8YBspHLLsHH5b_A6a2ZGE",
  authDomain: "sample-proj-d4450.firebaseapp.com",
  projectId: "sample-proj-d4450",
  storageBucket: "sample-proj-d4450.firebasestorage.app",
  messagingSenderId: "441698924812",
  appId: "1:441698924812:web:09f8fdc3dc0b8961f7b129",
  measurementId: "G-6Z9QHHGTF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);