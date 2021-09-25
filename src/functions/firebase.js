import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzirc8iKJ0u6V7p5k7RTBH1srpgjPecgo",
  authDomain: "ukcy-fireblog.firebaseapp.com",
  projectId: "ukcy-fireblog",
  storageBucket: "ukcy-fireblog.appspot.com",
  messagingSenderId: "199685224690",
  appId: "1:199685224690:web:004f273643e29a39c2b86b",
});

export const createUser = async (email, password, username) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // const displayName = username;
        // console.log(displayName)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ username });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};

export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};

export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);
  alert("Please check your mail box!");
};

export default firebaseApp;
