function noClicked() {
    const btn = document.getElementById("yes");
    let size = 24;

    btn.onclick = () => {
        size += 6;
        btn.style.fontSize = size + "px";
    };
}

function yesClicked() {
    console.log("Hallo");
}
