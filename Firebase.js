// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkBqjY4vs4Mi08x-tuofCbf0GwNTeghY",
  authDomain: "coffee-shop-h.firebaseapp.com",
  projectId: "coffee-shop-h",
  storageBucket: "coffee-shop-h.appspot.com",
  messagingSenderId: "42078858169",
  appId: "1:42078858169:web:b90f7d73799bdbb1f86468"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };