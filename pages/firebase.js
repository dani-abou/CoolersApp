import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdHApO74zTWvTrxV6V5RN86MzPew7MZao",
  authDomain: "wise-resolver-276416.firebaseapp.com",
  databaseURL: "https://wise-resolver-276416.firebaseio.com",
  projectId: "wise-resolver-276416",
  storageBucket: "wise-resolver-276416.appspot.com",
  messagingSenderId: "132395677069",
  appId: "1:132395677069:web:c637029d2ca18a6a7879c4"
};

let fb = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
let db = fb.firestore();
export default db;
