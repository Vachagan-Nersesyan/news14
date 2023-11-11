import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgYDivWJ4ki-ZLJFBlzIoqlfR-wAa5Tvo",
  authDomain: "reactnewsprotal.firebaseapp.com",
  projectId: "reactnewsprotal",
  storageBucket: "reactnewsprotal.appspot.com",
  messagingSenderId: "897178347886",
  appId: "1:897178347886:web:65409f93b24926b19b797f",
  measurementId: "G-8G5GRCMGDD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }