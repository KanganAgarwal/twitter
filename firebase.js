// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC63aGHmmkvp-jpII67HfnDIllG3TiWwaM",
  authDomain: "twitter-clone-e80e8.firebaseapp.com",
  projectId: "twitter-clone-e80e8",
  storageBucket: "twitter-clone-e80e8.appspot.com",
  messagingSenderId: "1029108307769",
  appId: "1:1029108307769:web:99441ce2c8265be36b7ae8",
  measurementId: "G-DB4L5TT1ER"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
