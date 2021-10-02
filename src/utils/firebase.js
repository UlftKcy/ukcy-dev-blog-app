import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { errorToastify } from "./customToastify";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export default firebaseApp;

export const createUser = async (email, password, username) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName: username });
  } catch (error) {
    errorToastify("The mail address is already in use by another account.");
  }
};
export const signIn = (email, password) => {
  firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log(error);
    });
};

export const signOut = () => {
  firebaseApp.auth().signOut();
};

export const userObserver = async (setCurrentUser) => {
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

export const signUpProvider = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  firebaseApp.auth().signInWithPopup(provider);
};
