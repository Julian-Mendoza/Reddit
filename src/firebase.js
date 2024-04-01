import { initializeApp } from 'firebase/app';
import { getAnalytics } from'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // If you plan to use Firestore Database
import { getAuth } from 'firebase/auth';  //If you need Authentication
import 'firebase/compat/auth';

const firebaseConfig = {
    /*Firebase Config (On firebases new project)*/
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); // For Firestore
const auth = getAuth(app); // For Authentication


export { auth, db };


