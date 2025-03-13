// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Add this import
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtNLQPOMgxYW7LQWhRVBC7MGtK_11wvqE",
  authDomain: "login-page-ade94.firebaseapp.com",
  projectId: "login-page-ade94",
  storageBucket: "login-page-ade94.firebasestorage.app",
  messagingSenderId: "613416858445",
  appId: "1:613416858445:web:b5010cb4ebc7e8bbdcbd04",
  measurementId: "G-8LGJRG4FP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Now this will work

export { auth };
