import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiaGcKsPqudW7Gp831AGz61uVINW1lZvs",
    authDomain: "facebook-a1ca7.firebaseapp.com",
    databaseURL: "https://facebook-a1ca7.firebaseio.com",
    projectId: "facebook-a1ca7",
    storageBucket: "facebook-a1ca7.appspot.com",
    messagingSenderId: "447821505436",
    appId: "1:447821505436:web:081c1a5d4b37f065b51e59",
    measurementId: "G-YTLKYG5M7F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;