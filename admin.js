import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  query,
  limitToLast
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

const chatBox = document.getElementById("messages");
const replyInput = document.getElementById("replyText");
const replyBtn = document.getElementById("replyBtn");

const msgQuery = query(ref(db, "messages"), limitToLast(10));

let lastReference = "";

onValue(msgQuery, (snapshot) => {

    chatBox.innerHTML = "";

    snapshot.forEach((child) => {

        const data = child.val();

        lastReference = data.reference;

        chatBox.innerHTML += `
        <div class="message">
        <b>Message:</b><br>
        ${data.text}<br><br>

        <b>Reference:</b><br>
        ${data.reference}
        </div>
        `;

    });

});

replyBtn.onclick = () => {

    const reply = replyInput.value.trim();

    if(reply==""){
        alert("Write Reply");
        return;
    }

    push(ref(db,"replies"),{

        reference:lastReference,

        text:reply,

        time:Date.now()

    });

    replyInput.value="";

    alert("Reply Sent");

};
