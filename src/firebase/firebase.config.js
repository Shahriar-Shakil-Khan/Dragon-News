// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-HoiHNqXZhxTZrfus5T1RhbboOQO9p7A",
  authDomain: "dragon-news-6c0ea.firebaseapp.com",
  projectId: "dragon-news-6c0ea",
  storageBucket: "dragon-news-6c0ea.firebasestorage.app",
  messagingSenderId: "858283787291",
  appId: "1:858283787291:web:7d56cd2ee7316d252d24be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;