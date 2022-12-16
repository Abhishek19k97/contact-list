import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA46hmxG7aKaDT4vHA5INnhvZQ6kwlpJ2I",
  authDomain: "uploadimage-f736a.firebaseapp.com",
  projectId: "uploadimage-f736a",
  storageBucket: "uploadimage-f736a.appspot.com",
  messagingSenderId: "587718698368",
  appId: "1:587718698368:web:c2741db32ad2b0eabc4d65",
  measurementId: "G-32V19RCGY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);