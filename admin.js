import { db } from "./firebase.js";

import {
ref,
push,
set,
onValue,
query,
limitToLast
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const messages=document.getElementById("messages");
const replyBtn=document.getElementById("replyBtn");
const statusBtn=document.getElementById("statusBtn");

const q=query(
ref(db,"creatorPortal/chat"),
limitToLast(10)
);

onValue(q,(snapshot)=>{

messages.innerHTML="";

snapshot.forEach((child)=>{

const data=child.val();

let cls=data.sender=="admin"
?"reply"
:"message";

messages.innerHTML+=`
<div class="${cls}">
<b>${data.sender}</b><br>
${data.text}
</div>
`;

});

messages.scrollTop=messages.scrollHeight;

});

replyBtn.onclick=function(){

const txt=document.getElementById("replyText").value.trim();

if(txt==""){
alert("Write a reply.");
return;
}

push(ref(db,"creatorPortal/chat"),{

sender:"admin",

text:txt,

time:Date.now()

});

document.getElementById("replyText").value="";

};

statusBtn.onclick=function(){

const txt=document.getElementById("statusText").value.trim();

if(txt==""){
alert("Write a status.");
return;
}

set(ref(db,"creatorPortal/status"),{

text:txt,

time:Date.now()

});

alert("Status Updated");

};
