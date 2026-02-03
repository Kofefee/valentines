function noClicked() {
    const btn = document.getElementById("yes");
    let size = 24;

    btn.onclick = () => {
        size += 6;
        btn.style.fontSize = size + "px";
    };

    const btnNo = document.getElementById("no");

    btnNo.onclick = () => {
        size -= 3;
        btn.style.fontSize = size + "px";
    };

}

