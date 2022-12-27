import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd-mKRazINRaiWUTFfR0GiEdSUX7cdG8U",
  authDomain: "bisbeeplusclone.firebaseapp.com",
  projectId: "bisbeeplusclone",
  storageBucket: "bisbeeplusclone.appspot.com",
  messagingSenderId: "764306386621",
  appId: "1:764306386621:web:e76a3bd7456ea35afcd1d4",
  measurementId: "G-H4MQTF1DZQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const database = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default database;
