// Load Event

window.addEventListener("load", (e) => {
    const div = document.createElement("div");
    div.textContent = "Page has fully loaded";
    div.style.backgroundColor = "#ff5733";
    const span = document.createElement("div");
    span.textContent = "X";
    span.style.marginLeft = "10px";
    span.style.cursor = "pointer";
    div.appendChild(span);
    div.style.fontSize = "2em";
    div.style.fontWeight = "bold";
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";

    span.addEventListener("click", () => {
        div.remove();
    });
    setTimeout(() => {
        document.body.appendChild(div);
    }, 2000);
});
