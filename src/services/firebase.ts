import { initializeApp } from 'firebase/app'

import { getDatabase } from 'firebase/database'
//import firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyD1DbvBQyFTHJpKISQxYuhTz-hnWRFYyYc",
  authDomain: "letmeask-e6edb.firebaseapp.com",
  databaseURL: "https://letmeask-e6edb-default-rtdb.firebaseio.com",
  projectId: "letmeask-e6edb",
  storageBucket: "letmeask-e6edb.appspot.com",
  messagingSenderId: "117746310302",
  appId: "1:117746310302:web:97e695c021553977376f8f"
}

//
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)




