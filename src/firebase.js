import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { authState } from "rxfire/auth";
import { collectionData } from "rxfire/firestore";
import { filter } from "rxjs/operators";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBIrbhK8bnnfGsSgE0js5bJaSd6wRK3wBc",
  authDomain: "saint-who.firebaseapp.com",
  projectId: "saint-who",
  storageBucket: "saint-who.appspot.com",
  messagingSenderId: "1049210349023",
  appId: "1:1049210349023:web:75bf1eef6379a9a39b906a",
  measurementId: "G-Q92TKR7S98"
});
const firestore = firebase.firestore(app); // Initialize firestore
const auth = firebase.auth(app); // Initialize firebase auth 
const loggedIn$ = authState(auth).pipe(filter(user => !!user)); // Observable only return when user is logged in. 
export { app, auth, firestore, collectionData, loggedIn$ }; 
export default firebase;
export const db = firebase.firestore();