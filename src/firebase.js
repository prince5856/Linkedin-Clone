
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDv_S74-TqmjSQjKqHCGjBci_ksWOcyZ9Y",
  authDomain: "linkedin-clone-project-43cd8.firebaseapp.com",
  projectId: "linkedin-clone-project-43cd8",
  storageBucket: "linkedin-clone-project-43cd8.appspot.com",
  messagingSenderId: "84507471588",
  appId: "1:84507471588:web:8bcd2297e85f87f2af86f1"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};