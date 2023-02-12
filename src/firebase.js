// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
    console.log(result);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
   
    //go to userdashboard.js
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profilePic",profilePic);
    
    // Navigate to the user dashboard page
    window.location.href = '/dashboard';

  }).catch((err)=>{
    console.log(err);
  })
};

export const SignOut=()=>{
  signOut(auth).then(() => {
    localStorage.clear();
    window.location.href = '/';
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
};