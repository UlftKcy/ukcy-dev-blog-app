import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { successToastify } from "./customToastify";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export default firebaseApp;

export const createUser = async (email, password, username) => {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebaseApp.auth();
    await currentUser.updateProfile({ displayName: username });
    successToastify("Registered successfully");
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
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
      alert("The password is invalid or the user does not have a password!");
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

export const forgotPassword = (email) => {
  firebaseApp.auth().sendPasswordResetEmail(email);
  alert("Please check your mail box!");
};
