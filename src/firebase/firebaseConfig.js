// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAADPXsxeIM7de3n1Yub_xAjKl35-9GyO0",
  authDomain: "codemine-bb57b.firebaseapp.com",
  projectId: "codemine-bb57b",
  storageBucket: "codemine-bb57b.appspot.com",
  messagingSenderId: "508138278659",
  appId: "1:508138278659:web:dc4592cc0cbda5639a2336",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const storage = getStorage(app);

export { fireDB, storage };
