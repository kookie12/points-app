import firebase from 'firebase';  

var firebaseConfig = {
    apiKey: "AIzaSyCwpgeZsvOH5KNHzej6YM8lmTT6uKgX6XQ",
    authDomain: "reward-points-app.firebaseapp.com",
    databaseURL: "https://reward-points-app-default-rtdb.firebaseio.com",
    projectId: "reward-points-app",
    storageBucket: "reward-points-app.appspot.com",
    messagingSenderId: "8152674802",
    appId: "1:8152674802:web:038058b65ea555b93ebb6b",
    measurementId: "G-8RT52K6HTE"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;