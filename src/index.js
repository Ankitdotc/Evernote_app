import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const firebase = require('firebase');
// require('firebase/firestore');
import { firebase } from '@firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
  
  apiKey: "AIzaSyAt0C7_kfaJvcqUviAsnY7WtHE5ONseK64",
    authDomain: "evernote-clone-1367f.firebaseapp.com",
    projectId: "evernote-clone-1367f",
    storageBucket: "evernote-clone-1367f.appspot.com",
    messagingSenderId: "675892606738",
    appId: "1:675892606738:web:f7fdd56642f8babead65cb"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
