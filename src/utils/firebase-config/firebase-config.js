import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHUgNLKduRQ8V8Vykz0vQg_IRWkLl5QhA",
  authDomain: "practice-db-aae93.firebaseapp.com",
  projectId: "practice-db-aae93",
  storageBucket: "practice-db-aae93.appspot.com",
  messagingSenderId: "780630952525",
  appId: "1:780630952525:web:0fb972c69dbd3ac741aa04",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
