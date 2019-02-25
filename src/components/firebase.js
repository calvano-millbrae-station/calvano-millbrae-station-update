import firebase from 'firebase'
const config = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "calvano-millbrae-station.firebaseapp.com",
  databaseURL: "https://calvano-millbrae-station.firebaseio.com",
  projectId: "calvano-millbrae-station",
  storageBucket: "calvano-millbrae-station.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
export default firebase;
