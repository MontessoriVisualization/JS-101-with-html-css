// Mouse Events

const button = document.querySelector("button");

button.addEventListener("mousedown", (e) => {
    button.innerText = "Pressing";
});

button.addEventListener("mouseup", (e) => {
    button.innerText = "Releasing";
});
