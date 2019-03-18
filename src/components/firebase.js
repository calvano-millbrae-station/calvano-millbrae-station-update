import firebase from 'firebase'
const config = {
<<<<<<< HEAD
  apiKey: process.env.FIREBASE_API_KEY,
=======
  apiKey: "process.env.FIREBASE_API_KEY",
>>>>>>> bf845e97d32bc38a5c5b3c135b5e6d1eef6ebb66
  authDomain: "calvano-millbrae-station.firebaseapp.com",
  databaseURL: "https://calvano-millbrae-station.firebaseio.com",
  projectId: "calvano-millbrae-station",
  storageBucket: "calvano-millbrae-station.appspot.com",
<<<<<<< HEAD
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
=======
  messagingSenderId: "process.env.FIREBASE_MESSAGING_SENDER_ID"
>>>>>>> bf845e97d32bc38a5c5b3c135b5e6d1eef6ebb66
};
firebase.initializeApp(config);
export default firebase;
