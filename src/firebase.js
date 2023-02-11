// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVcwZ7tdSj0aSnSsV2JSFF0OL9y-xRug",
  authDomain: "fileupload-38d64.firebaseapp.com",
  projectId: "fileupload-38d64",
  storageBucket: "fileupload-38d64.appspot.com",
  messagingSenderId: "677590353964",
  appId: "1:677590353964:web:046fac68350847e167a989"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

