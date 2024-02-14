import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCRTGgxPzWCz6T4trDN7njUqhVW13ywb9s",
  authDomain: "data-856f8.firebaseapp.com",
  projectId: "data-856f8",
  storageBucket: "data-856f8.appspot.com",
  messagingSenderId: "814464607433",
  appId: "1:814464607433:web:b22c9fb01149293174d918"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
