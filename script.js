import { db } from "./firebase.js";

import {
ref,
push,
onValue,
query,
limitToLast
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const sendBtn=document.getElementById("sendBtn");
const chatBox=document.getElementById("chatBox");

if(sendBtn){

sendBtn.onclick=function(){

const msg=document.getElementById("message").value.trim();

if(msg=="") return;

push(ref(db,"creatorPortal/chat"),{

sender:"user",

text:msg,

time:Date.now()

});

document.getElementById("message").value="";

};

}

if(chatBox){

const q=query(ref(db,"creatorPortal/chat"),limitToLast(10));

onValue(q,(snapshot)=>{

chatBox.innerHTML="";

snapshot.forEach((child)=>{

const d=child.val();

if(d.sender=="user"){

chatBox.innerHTML+=`
<div class="message">
${d.text}
</div>
`;

}else{

chatBox.innerHTML+=`
<div class="reply">
${d.text}
</div>
`;

}

});

chatBox.scrollTop=chatBox.scrollHeight;

});

}

const status=document.getElementById("adminMessage");

if(status){

onValue(ref(db,"creatorPortal/status"),(snapshot)=>{

if(snapshot.exists()){

status.innerHTML=snapshot.val().text;

}

});

}
