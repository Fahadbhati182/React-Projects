// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6--R7Vl5i9O8KALCp1XDcmUN20by4k7k",
    authDomain: "vite-app-5fec5.firebaseapp.com",
    projectId: "vite-app-5fec5",
    storageBucket: "vite-app-5fec5.firebasestorage.app",
    messagingSenderId: "503292960072",
    appId: "1:503292960072:web:b9c96ec09f52d43743677d",
    measurementId: "G-S72LNMB0WM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);