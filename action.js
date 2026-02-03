let size = 24;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");

noBtn.addEventListener("click", () => {
    size += 6;
    yesBtn.style.fontSize = size + "px";

    // kleine Animation
    yesBtn.classList.add("wiggle");
    setTimeout(() => yesBtn.classList.remove("wiggle"), 300);
});

yesBtn.addEventListener("click", () => {
    title.innerHTML = "YAAAY 💕🥰 I knew it!";
    noBtn.style.display = "none";
    yesBtn.style.transform = "scale(1.3)";
});
