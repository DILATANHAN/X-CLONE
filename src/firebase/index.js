import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSMNBlsjDl2NL_M-ulU13-JY-r13A6L8k",
  authDomain: "x-clone-b1a7d.firebaseapp.com",
  projectId: "x-clone-b1a7d",
  storageBucket: "x-clone-b1a7d.appspot.com",
  messagingSenderId: "648044775010",
  appId: "1:648044775010:web:d0ec25b7d158be2471733b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansini al
 export const auth =getAuth(app);

 //google saglayicisini kur
 export const provider = new GoogleAuthProvider();