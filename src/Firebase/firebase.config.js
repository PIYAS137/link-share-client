import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyNSXB1WY06h1KMnvsdzNdTegVf8QeB0",
  authDomain: "link-share-6b37f.firebaseapp.com",
  projectId: "link-share-6b37f",
  storageBucket: "link-share-6b37f.appspot.com",
  messagingSenderId: "1006789458884",
  appId: "1:1006789458884:web:4b82da4bd115fccd2bc291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const FirebaseAuth = getAuth(app);