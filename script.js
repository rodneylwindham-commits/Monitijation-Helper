import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getDatabase,
ref,
push
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"monitijationhelper.firebaseapp.com",

databaseURL:"https://monitijationhelper-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId:"monitijationhelper",

storageBucket:"monitijationhelper.firebasestorage.app",

messagingSenderId:"251665802546",

appId:"1:251665802546:web:c41a366f15323b4bcaa32b"

};

const app=initializeApp(firebaseConfig);

const db=getDatabase(app);

const sendBtn=document.getElementById("sendBtn");

sendBtn.addEventListener("click",()=>{

let text=document.getElementById("text").value;

let reference=document.getElementById("reference").value;

if(text=="" || reference==""){

alert("সব তথ্য লিখুন");

return;

}

push(ref(db,"messages"),{

text:text,

reference:reference,

time:Date.now()

});

alert("Message Sent");

document.getElementById("text").value="";

document.getElementById("reference").value="";

});
