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
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();


      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error){
        console.log("error creating user", error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;