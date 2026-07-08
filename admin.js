import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
query,
limitToLast,
onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

const messagesRef = query(
ref(db, "messages"),
limitToLast(10)
);

onValue(messagesRef, (snapshot) => {

const box = document.getElementById("messages");

box.innerHTML = "";

snapshot.forEach((child) => {

const data = child.val();

box.innerHTML += `
<div class="msg">
<p><b>Text:</b> ${data.text}</p>
<p><b>Reference:</b> ${data.reference}</p>
<hr>
</div>
`;

});

});
