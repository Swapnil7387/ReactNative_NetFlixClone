// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPV_IwA_U6QyBJe-2ObhlPTRSkIxwk35g",
  authDomain: "netflix-project-27991.firebaseapp.com",
  projectId: "netflix-project-27991",
  storageBucket: "netflix-project-27991.appspot.com",
  messagingSenderId: "184903953976",
  appId: "1:184903953976:web:c3ae7ff7ef404b174b80cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);