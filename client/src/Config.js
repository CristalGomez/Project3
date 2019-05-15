import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAKCeWfbrL7RP6yLaEFZrK8UAuCmNaSs30",
    authDomain: "iimageproject.firebaseapp.com",
    databaseURL: "https://iimageproject.firebaseio.com",
    projectId: "iimageproject",
    storageBucket: "iimageproject.appspot.com",
    messagingSenderId: "254020928797",
    appId: "1:254020928797:web:c811b5ea32445ab8"
};

const app = firebase.initializeApp(config)
const config = Rebase.createClass(app.database())

export { app, config }