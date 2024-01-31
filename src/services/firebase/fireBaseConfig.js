// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCchCt3ZLL6bZzQpr9iblb0Etty30KSBHA",
  authDomain: "ecommerceintiyaco.firebaseapp.com",
  projectId: "ecommerceintiyaco",
  storageBucket: "ecommerceintiyaco.appspot.com",
  messagingSenderId: "294770291346",
  appId: "1:294770291346:web:18986f1a4189a6186a6c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);