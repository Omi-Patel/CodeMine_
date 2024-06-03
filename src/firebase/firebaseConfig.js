// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FireBase_API_KEY,
  authDomain: import.meta.env.VITE_FireBase_authDomain,
  projectId: import.meta.env.VITE_FireBase_projectId,
  storageBucket: import.meta.env.VITE_FireBase_storageBucket,
  messagingSenderId: import.meta.env.VITE_FireBase_messagingSenderId,
  appId: import.meta.env.VITE_FireBase_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const storage = getStorage(app);

export { fireDB, storage };
