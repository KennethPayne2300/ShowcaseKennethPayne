// dark/light mode
let toggle = document.querySelector("#darkmode");
let body = document.querySelector("#wrapper");

let mode = localStorage.getItem("mode");

if (mode === "light") {
    body.className = "light";
    toggle.style.backgroundColor = "black";
    toggle.style.color = "white";
} else {
    body.className = "dark";
    toggle.style.backgroundColor = "white";
    toggle.style.color = "black";
}

toggle.addEventListener("click", function() {
    
    if (mode === "light") {
        body.className = "dark";
        mode = "dark";
        toggle.style.backgroundColor = "white";
        toggle.style.color = "black";
    } else {
        body.className = "light";
        mode = "light"
        toggle.style.backgroundColor = "black";
        toggle.style.color = "white";
    };
    localStorage.setItem("mode", mode);
});