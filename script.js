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

const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = () => {

  const text = document.getElementById("message").value.trim();
  const reference = document.getElementById("reference").value.trim();

  if(text=="" || reference==""){
    alert("সব তথ্য লিখুন");
    return;
  }

  push(ref(db,"messages"),{
    text:text,
    reference:reference,
    time:Date.now()
  });

  document.getElementById("message").value="";
};

const msgQuery = query(ref(db,"messages"),limitToLast(10));

onValue(msgQuery,(snapshot)=>{

  chatBox.innerHTML="";

  snapshot.forEach((child)=>{

    const data = child.val();

    chatBox.innerHTML += `
      <div class="message">
        ${data.text}
      </div>
    `;

  });

});

onValue(ref(db,"replies"),(snapshot)=>{

  if(!snapshot.exists()) return;

  let html="";

  snapshot.forEach((child)=>{

    const data = child.val();

    html += `
      <div class="reply">
        Admin: ${data.text}
      </div>
    `;

  });

  chatBox.innerHTML += html;

});
