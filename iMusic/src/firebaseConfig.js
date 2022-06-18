import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhaxdiwuIPx1jQ7OhFvKafmSc3Ry2vcMc",
  authDomain: "imusic-f5c22.firebaseapp.com",
  databaseURL: "https://imusic-f5c22-default-rtdb.firebaseio.com",
  projectId: "imusic-f5c22",
  storageBucket: "imusic-f5c22.appspot.com",
  messagingSenderId: "606258949262",
  appId: "1:606258949262:web:299495d75f0f076dea6ddf",
  measurementId: "G-QC0MXLVQYS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
