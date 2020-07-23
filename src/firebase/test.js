import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("zwgYP2Uu6awQg97LXWZY")
  .collection("cartItems")
  .doc("zp7bhCGPWS1zKfSKd4Me");

firestore.doc("/users/zwgYP2Uu6awQg97LXWZY/cartItems/zp7bhCGPWS1zKfSKd4Me");
firestore.collection("/users/zwgYP2Uu6awQg97LXWZY/cartItems");
