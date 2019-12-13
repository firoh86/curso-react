import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDX9gpkGpPgusZU7HIchXg-nROI7AcepNw",
  authDomain: "fir-01-a9c0c.firebaseapp.com",
  databaseURL: "https://fir-01-a9c0c.firebaseio.com",
  projectId: "fir-01-a9c0c",
  storageBucket: "fir-01-a9c0c.appspot.com",
  messagingSenderId: "353487722813",
  appId: "1:353487722813:web:1b7f2bdf55bca98ecc4d54",
  measurementId: "G-4LVJRG5BS2"
};
const fire = firebase.initializeApp(config);

export default fire;
