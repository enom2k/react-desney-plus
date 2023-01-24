// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPxD3GYZ1RWpRy6Ava2XFb9JdySWun17g",
  authDomain: "react-desney-plus-app.firebaseapp.com",
  projectId: "react-desney-plus-app",
  storageBucket: "react-desney-plus-app.appspot.com",
  messagingSenderId: "443689261528",
  appId: "1:443689261528:web:b578978c29188456463aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;