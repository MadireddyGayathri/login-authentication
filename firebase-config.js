// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5J6_0nbR0aDBz2yPODJxnf4bkN2JxaLE",
    authDomain: "login-a1d10.firebaseapp.com",
    projectId: "login-a1d10",
    storageBucket: "login-a1d10.appspot.com",
    messagingSenderId: "403138572116",
    appId: "1:403138572116:web:434dd639cfa900b518e2c1",
    measurementId: "G-5LV0RYSBD1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }