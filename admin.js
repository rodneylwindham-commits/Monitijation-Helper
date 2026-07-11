import { db } from "./firebase.js";

import {
ref,
set,
onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const statusBtn = document.getElementById("statusBtn");
const requestList = document.getElementById("requestList");

statusBtn.onclick = function () {

    const text = document.getElementById("statusText").value.trim();

    if (text === "") {
        alert("Please write a status.");
        return;
    }

    set(ref(db, "creatorPortal/status"), {
        text: text,
        time: Date.now()
    });

    alert("Status Updated");

};

onValue(ref(db, "creatorPortal/requests"), (snapshot) => {

    requestList.innerHTML = "";

    if (!snapshot.exists()) {

        requestList.innerHTML = "<p>No requests found.</p>";
        return;

    }

    snapshot.forEach((child) => {

        const data = child.val();

        requestList.innerHTML += `

        <div class="review-card">

            <p><b>Request:</b> ${data.subject}</p>

            <p><b>Message:</b> ${data.message}</p>

        </div>

        `;

    });

});
