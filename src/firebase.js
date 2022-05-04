import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APIID
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

//need to use this at retrieving data from firebase and the firestore a.k.a database is created in firebase