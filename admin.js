import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getDatabase,
  ref,
  onValue
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

const messages = document.getElementById("messages");

onValue(ref(db, "messages"), (snapshot) => {

    messages.innerHTML = "";

    snapshot.forEach((child) => {

        const data = child.val();

        messages.innerHTML += `
        <div style="
        background:#374151;
        color:white;
        padding:12px;
        border-radius:10px;
        margin-top:15px;
        ">
        <b>Text:</b><br>${data.text}<br><br>

        <b>Reference:</b><br>${data.reference}
        </div>
        `;

    });

});
