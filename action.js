let size = 24;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");


const gifWaiting = document.getElementById("gif-waiting");
const gifYes = document.getElementById("gif-yes");


noBtn.addEventListener("click", () => {
    size += 6;
    yesBtn.style.fontSize = size + "px";

    gifWaiting.style.display = "block";
    gifYes.style.display = "none";

    yesBtn.classList.add("wiggle");
    setTimeout(() => yesBtn.classList.remove("wiggle"), 300);
});

yesBtn.addEventListener("click", () => {
    title.innerHTML = "YAAAY 💕🥰 I knew it!";

    gifWaiting.style.display = "none";
    gifYes.style.display = "block";

    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.3)";
});
