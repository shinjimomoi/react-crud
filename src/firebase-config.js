import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-crud-6dee0.firebaseapp.com",
  projectId: "react-crud-6dee0",
  storageBucket: "react-crud-6dee0.appspot.com",
  messagingSenderId: "49125752748",
  appId: "1:49125752748:web:9b26700c3e95b85e0f0409",
  measurementId: "G-51SK15CRH2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
