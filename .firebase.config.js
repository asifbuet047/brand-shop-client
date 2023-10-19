import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBkAF1rccChPLYKS2bDk0BhmxqQi9QPF90",
    authDomain: "assignment-10-brand-shop-b0762.firebaseapp.com",
    projectId: "assignment-10-brand-shop-b0762",
    storageBucket: "assignment-10-brand-shop-b0762.appspot.com",
    messagingSenderId: "278333843102",
    appId: "1:278333843102:web:ee5ccfbd206199a9963d8f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
