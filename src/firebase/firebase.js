import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5lfFiJn4hATfimf_f-bE2fn3P8UQjDQI",
  authDomain: "dc-home-ownership.firebaseapp.com",
  databaseURL: "https://dc-home-ownership.firebaseio.com",
  projectId: "dc-home-ownership",
  storageBucket: "dc-home-ownership.appspot.com",
  messagingSenderId: "666642039200",
  appId: "1:666642039200:web:32528c21140252136ba4c5",
  measurementId: "G-C44L28BZHF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
