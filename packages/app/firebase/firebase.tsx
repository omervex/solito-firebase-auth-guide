// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  User,
  NextOrObserver,
  ErrorFn,
  CompleteFn,
  Unsubscribe
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9hQHuShwy_1nbZB46njNY_-rOQtBazmo",
  authDomain: "solitoauthguide.firebaseapp.com",
  projectId: "solitoauthguide",
  storageBucket: "solitoauthguide.appspot.com",
  messagingSenderId: "942378150104",
  appId: "1:942378150104:web:ce7a3710d19af662c24fad",
  measurementId: "G-3FS2QWZ5XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const onAuthStateChangedFunc = (
  nextOrObserver: NextOrObserver<User>,
  error?: ErrorFn,
  completed?: CompleteFn
): Unsubscribe => {
  return onAuthStateChanged(auth, nextOrObserver, error, completed);
}

export {
  onAuthStateChangedFunc as onAuthStateChanged,
}