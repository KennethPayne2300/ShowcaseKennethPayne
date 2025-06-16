// dark/light mode
let toggle = document.querySelector("#darkmode");

toggle.addEventListener("click", function() {
    let body = document.querySelector("#wrapper");
    
    if (body.className === "light") {
        body.className = "dark";
        toggle.style.backgroundColor = "white";
        toggle.style.color = "black";
    } else {
        body.className = "light";
        toggle.style.backgroundColor = "black";
        toggle.style.color = "white";
    }
})