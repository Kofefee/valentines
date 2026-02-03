let size = 24;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");
const fx = document.getElementById("fx");

const gifWaiting = document.getElementById("gif-waiting");
const gifYes = document.getElementById("gif-yes");


noBtn.addEventListener("click", () => {
    size += 6;
    yesBtn.style.fontSize = size + "px";

    gifWaiting.style.opacity = "1";
    gifYes.style.opacity = "0";

    yesBtn.classList.add("wiggle");
    setTimeout(() => yesBtn.classList.remove("wiggle"), 300);
});

yesBtn.addEventListener("click", () => {
    title.innerHTML = "YAAAY 💕🥰 I knew it!";
    fx.innerHTML = "Take a screenshot and send it to me for validation!"

    gifWaiting.style.opacity = "0";
    gifYes.style.opacity = "1";

    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.3)";
});
