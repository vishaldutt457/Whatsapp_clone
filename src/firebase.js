import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAicbcquElsG2rWHzRqnro49Ta5PfN24_I",
    authDomain: "whatsapp1-d499f.firebaseapp.com",
    projectId: "whatsapp1-d499f",
    storageBucket: "whatsapp1-d499f.appspot.com",
    messagingSenderId: "1069703645861",
    appId: "1:1069703645861:web:390ac12cfc4fbc75e2db4c",
    measurementId: "G-BZ4CCCNV8P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;