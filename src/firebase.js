// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbA3k8hbKhcu-gRy6zS_OMzUYl8xxqVSI",
    authDomain: "twitter-clone-2-a9b96.firebaseapp.com",
    projectId: "twitter-clone-2-a9b96",
    storageBucket: "twitter-clone-2-a9b96.appspot.com",
    messagingSenderId: "457156498486",
    appId: "1:457156498486:web:0ee7cb1baaf5a8d8cc3497"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export { app, db, auth }