import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUa8D_hi6uUDNyr3n2r3CigniLzTzSHs",
  authDomain: "crud-app-89e50.firebaseapp.com",
  projectId: "crud-app-89e50",
  storageBucket: "crud-app-89e50.appspot.com",
  messagingSenderId: "348156640868",
  appId: "1:348156640868:web:4f0e9a4cb056f97d9aa971",
  measurementId: "G-D6R1BB1JK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)