import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzjwSUHFkp2f524Q1pT2dbArZTxJOXz8g",
    authDomain: "contactapp-2f5c0.firebaseapp.com",
    projectId: "contactapp-2f5c0",
    storageBucket: "contactapp-2f5c0.appspot.com",
    messagingSenderId: "314203844557",
    appId: "1:314203844557:web:775c1503351e3184b91e84"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

