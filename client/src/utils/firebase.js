import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-5e323.firebaseapp.com",
  projectId: "authexamnotes",
  storageBucket: "authexamnotes.appspot.com",
  messagingSenderId: "198091553006",
  appId: "1:198091553006:web:cd719d4ee1ebf391139bff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
