import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD75HJqjOsGs51V8q7287FsNpIMoWrwlHQ",
  authDomain: "pc-builder-96a26.firebaseapp.com",
  projectId: "pc-builder-96a26",
  storageBucket: "pc-builder-96a26.appspot.com",
  messagingSenderId: "417409467396",
  appId: "1:417409467396:web:56a17f17409d32cfdb6151",
  measurementId: "G-G5JZPRJWMK"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);