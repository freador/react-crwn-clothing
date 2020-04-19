import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBMlTsv5Y1Hm_0E9gutOx5VkB0tgCLN1z8",
    authDomain: "codeby-test.firebaseapp.com",
    databaseURL: "https://codeby-test.firebaseio.com",
    projectId: "codeby-test",
    storageBucket: "codeby-test.appspot.com",
    messagingSenderId: "473887660278",
    appId: "1:473887660278:web:0421356b6f9e6a8987b4d7",
    measurementId: "G-QWE9TXT916"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;