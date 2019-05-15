import firebase from 'firebase/app'
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDf9k_vqxZDEI_Xvxp1Vu8tf_o754wEjmM",
    authDomain: "project3image.firebaseapp.com",
    databaseURL: "https://project3image.firebaseio.com",
    projectId: "project3image",
    storageBucket: "project3image.appspot.com",
    messagingSenderId: "1011121577162",
    appId: "1:1011121577162:web:5d38b53c66d1daed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }