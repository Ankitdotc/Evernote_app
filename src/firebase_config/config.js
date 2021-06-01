import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyAt0C7_kfaJvcqUviAsnY7WtHE5ONseK64",
  authDomain: "evernote-clone-1367f.firebaseapp.com",
  projectId: "evernote-clone-1367f",
  storageBucket: "evernote-clone-1367f.appspot.com",
  messagingSenderId: "675892606738",
  appId: "1:675892606738:web:f7fdd56642f8babead65cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;