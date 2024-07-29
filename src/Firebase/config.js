// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configure Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyCVciy0imK-HCeA9fJDTtRHhSeIpRxuWS4',
  authDomain: 'authreactjsfirebaseui.firebaseapp.com',
  projectId: "authreactjsfirebaseui",
  storageBucket: "authreactjsfirebaseui.appspot.com",
  messagingSenderId: "731464871587",
  appId: "1:731464871587:web:9e76c3e7548f7b9c249916",
  measurementId: "G-LH9XQ6CYW1"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth }
export default firebaseApp