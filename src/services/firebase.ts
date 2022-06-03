import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
//import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  databaseURL: "process.env.REACT_APP_DATABASE_UR",
  projectId: "process.env.REACT_APP_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_APP_MESSAGING_SENDER_ID",
  appId: "process.env.REACT_APP_APP_ID"
}

//
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//firebase.initializeApp(firebaseConfig);

const auth = getAuth()
// export const auth = firebase.auth();
const database = getDatabase(app)
// export const database = firebase.database();
