// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCG7zB7qhMLimsA82ldi61q4fh8nsm1nCc",
        authDomain: "igreact-b3fda.firebaseapp.com",
        databaseURL: "https://igreact-b3fda.firebaseio.com",
        projectId: "igreact-b3fda",
        storageBucket: "igreact-b3fda.appspot.com",
        messagingSenderId: "181070276986",
        appId: "1:181070276986:web:0e5e82ba2e844cd2094ec3",
        measurementId: "G-KHM1DG2H0P"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
