import Rebase from "re-base";
import firebase from "firebase";

//create firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXqnhwJ3GyeMGuQFAMGl86Ys_yzLD0KFA",
  authDomain: "catch-of-the-day-anwana-ntofon.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-anwana-ntofon.firebaseio.com"
});

// created rebase binding that allows us to mirror state to firebase changes. rebase is a firebase react specific package
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
