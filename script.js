// ---------- Index ----------
const pageLink = document.getElementById("pageLink");
const nextBtn = document.getElementById("nextBtn");

if (nextBtn && pageLink) {
    nextBtn.onclick = function () {

        if (pageLink.value.trim() === "") {
            alert("Please paste your link.");
            return;
        }

        localStorage.setItem("pageLink", pageLink.value.trim());

        window.location.href = "review.html";
    };
}

// ---------- Review ----------
const setupBtn = document.getElementById("setupBtn");

if (setupBtn) {

    setupBtn.onclick = function () {

        window.location.href = "reason.html";

    };

}

// ---------- Reason ----------
const reasonBtn = document.getElementById("reasonNext");
const reasonBox = document.getElementById("reason");

if (reasonBtn && reasonBox) {

    reasonBtn.onclick = function () {

        if (reasonBox.value.trim() == "") {

            alert("Please write something.");

            return;

        }

        localStorage.setItem("reason", reasonBox.value.trim());

        window.location.href = "survey.html";

    };

}

// ---------- Survey ----------
const applyBtn = document.getElementById("applyBtn");

if (applyBtn) {

    const checks = document.querySelectorAll(".check");

    function checkAll() {

        let ok = true;

        checks.forEach(c => {

            if (!c.checked) ok = false;

        });

        applyBtn.disabled = !ok;

    }

    checks.forEach(c => {

        c.addEventListener("change", checkAll);

    });

    applyBtn.onclick = function () {

        window.location.href = "status.html";

    };

}

// ---------- Status ----------
const statusNext = document.getElementById("statusNext");

if (statusNext) {

    statusNext.onclick = function () {

        window.location.href = "request.html";

    };

}

// ---------- Success ----------
const finishBtn = document.getElementById("finishBtn");

if (finishBtn) {

    finishBtn.onclick = function () {

        localStorage.clear();

        window.location.href = "index.html";

    };

}
