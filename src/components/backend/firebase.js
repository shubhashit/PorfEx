// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBW99fH6YBuF-TyjKpKfevA7dsA_VIQ3V0",
    authDomain: "profex-b211a.firebaseapp.com",
    projectId: "profex-b211a",
    storageBucket: "profex-b211a.appspot.com",
    messagingSenderId: "307068937431",
    appId: "1:307068937431:web:50e1290854b55a33477c92",
    measurementId: "G-9JYYXNV5ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new  GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
export {auth,provider,storage,db}