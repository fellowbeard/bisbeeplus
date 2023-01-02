// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth, googleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAd-mKRazINRaiWUTFfR0GiEdSUX7cdG8U",
  authDomain: "bisbeeplusclone.firebaseapp.com",
  projectId: "bisbeeplusclone",
  storageBucket: "bisbeeplusclone.appspot.com",
  messagingSenderId: "764306386621",
  appId: "1:764306386621:web:e76a3bd7456ea35afcd1d4",
  measurementId: "G-H4MQTF1DZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage(firebaseApp);
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, storage };
export default db;
