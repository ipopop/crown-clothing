import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu3vP2Vd7wKWa3pxFHb8Z-belYmLsTQjw",
  authDomain: "crwn-db-ee997.firebaseapp.com",
  databaseURL: "https://crwn-db-ee997.firebaseio.com",
  projectId: "crwn-db-ee997",
  storageBucket: "crwn-db-ee997.appspot.com",
  messagingSenderId: "145855830986",
  appId: "1:145855830986:web:fb395d1b320a9dea1acd33",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  };

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// auth.getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     let token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   let user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   let errorCode = error.code;
//   let errorMessage = error.message;
//   // The email of the user's account used.
//   let email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   let credential = error.credential;
//   // ...
// });

export default firebase;
