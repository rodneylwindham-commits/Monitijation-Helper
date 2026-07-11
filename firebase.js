import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getDatabase
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {

apiKey: "AIzaSyAtO9e2IQKCwYjAC5PuvCFYcYozTWe9Oyk",

authDomain: "monitijationhelper.firebaseapp.com",

databaseURL: "https://monitijationhelper-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId: "monitijationhelper",

storageBucket: "monitijationhelper.firebasestorage.app",

messagingSenderId: "251665802546",

appId: "1:251665802546:web:c41a366f15323b4bcaa32b"

};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
