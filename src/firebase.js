import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAH2EP-fbpQrdR_UY6YGS63DDlr8RLxvzM",
    authDomain: "tamis040-1acb0.firebaseapp.com",
    projectId: "tamis040-1acb0",
    storageBucket: "tamis040-1acb0.appspot.com",
    messagingSenderId: "248449546499",
    appId: "1:248449546499:web:8b36afd93685186a935136",
    measurementId: "G-TLH9CTZJRX"
});
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export { db, auth, storage};
//   export default db;