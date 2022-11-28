// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEjitRFjRlZM5lwROcrLVbLh0-LzJTL7c",
  authDomain: "login-web-jorgeduje.firebaseapp.com",
  projectId: "login-web-jorgeduje",
  storageBucket: "login-web-jorgeduje.appspot.com",
  messagingSenderId: "492803805220",
  appId: "1:492803805220:web:0dd296008992b5518a48b1"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)