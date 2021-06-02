import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDouy47hj-oBDK4lk-zcKr4ur9Bywl8ItQ",
    authDomain: "crwn-db-469c6.firebaseapp.com",
    projectId: "crwn-db-469c6",
    storageBucket: "crwn-db-469c6.appspot.com",
    messagingSenderId: "67643238071",
    appId: "1:67643238071:web:478b4d3bb6959405640f32",
    measurementId: "G-PSPREZ2QHM"
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;