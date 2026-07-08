import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  query,
  limitToLast,
  onValue,
  push
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

const messagesDiv = document.getElementById("messages");

const messagesQuery = query(ref(db, "messages"), limitToLast(10));

onValue(messagesQuery, (snapshot) => {

  messagesDiv.innerHTML = "";

  snapshot.forEach((child) => {

    const data = child.val();

    messagesDiv.innerHTML += `
      <div style="background:#374151;color:white;padding:12px;border-radius:8px;margin-top:10px;">
        <b>Message:</b><br>${data.text}<br><br>
        <b>Reference:</b><br>${data.reference}
      </div>
    `;
  });

});

document.getElementById("replyBtn").onclick = function(){

  const reply = document.getElementById("replyText").value;

  if(reply==""){
    alert("Reply লিখুন");
    return;
  }

  push(ref(db,"replies"),{
    text:reply,
    time:Date.now()
  });

  document.getElementById("replyText").value="";

  alert("Reply Sent");

};
