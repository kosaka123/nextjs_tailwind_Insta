import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtcMO0RS5RQ9e4o4tMf5QoEEUFYVNrnuo",

  authDomain: "instagram-5ffed.firebaseapp.com",

  projectId: "instagram-5ffed",

  storageBucket: "instagram-5ffed.appspot.com",

  messagingSenderId: "408763268866",

  appId: "1:408763268866:web:63b9280a2b234e2f530c1b",

  measurementId: "G-9YDFEM4PTQ",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
