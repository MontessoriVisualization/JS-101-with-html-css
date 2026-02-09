// Keyboard Events

document.addEventListener("keydown", (e) => {
    if(e.key === "Backspace"){
        const pre = document.querySelector("p").innerText;
        document.querySelector("p").innerText = pre.slice(0, pre.length - 1);
    }
    else if(e.key === "Enter"){
        document.querySelector("p").innerText += "\n";
        console.log(document.querySelector("span").style);
    }
    else{
        document.querySelector("p").innerText += `${e.key}`;
    }
});
