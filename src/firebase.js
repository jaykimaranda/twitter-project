import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBp3vpNKO3VG5V3j1DOej0z2p4snZoAjHg",
    authDomain: "twitter-clone-d6296.firebaseapp.com",
    databaseURL: "https://twitter-clone-d6296.firebaseio.com",
    projectId: "twitter-clone-d6296",
    storageBucket: "twitter-clone-d6296.appspot.com",
    messagingSenderId: "1055829613718",
    appId: "1:1055829613718:web:fdbbb0f4f3842b065df6b7",
    measurementId: "G-EENCQ1K9BJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// this is for connecting to the back end
const db = firebaseApp.firestore();

// In order to access our database anywhere
export default db;