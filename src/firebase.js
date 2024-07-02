import { initializeApp } from 'firebase/app';
import { getAnalytics } from'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // If you plan to use Firestore Database
import { getAuth } from 'firebase/auth';  //If you need Authentication
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBk7d3wp5ihV2fePxLtDvC3g_I7FHBeBIA",
    authDomain: "reddit-7d06f.firebaseapp.com",
    projectId: "reddit-7d06f",
    storageBucket: "reddit-7d06f.appspot.com",
    messagingSenderId: "173523983509",
    appId: "1:173523983509:web:958a3f37bd61904922cf9c",
    measurementId: "G-2N128K61C6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); // For Firestore
const auth = getAuth(app); // For Authentication


export { auth, db };


