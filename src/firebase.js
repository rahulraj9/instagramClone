import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBsVGpak0-RkRg5K0fLVjUdvpxlGBf6GXc",
    authDomain: "instagram-clone-134c0.firebaseapp.com",
    projectId: "instagram-clone-134c0",
    storageBucket: "instagram-clone-134c0.appspot.com",
    messagingSenderId: "794068919509",
    appId: "1:794068919509:web:04d6a9d7c6627ff6802e5c",
    measurementId: "G-GM7NE3KW6K"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage }