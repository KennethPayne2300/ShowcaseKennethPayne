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

// picswitch
function picSwap() {
    let pic1 = document.querySelector("#pic1");
    let pic2 = document.querySelector("#pic2");
    let pic3 = document.querySelector("#pic3");
    let pic4 = document.querySelector("#pic4");
    let pic5 = document.querySelector("#pic5");
    
    let pic = 1;
    let id = setInterval(frame, 1500);

    function frame() {
        if (pic === 1) {
            pic1.style.display = "none";
            pic2.style.display = "block";
            pic = 2;
        } else if (pic === 2) {
            pic2.style.display = "none";
            pic3.style.display = "block";
            pic = 3;
        } else if (pic === 3) {
            pic3.style.display = "none";
            pic4.style.display = "block";
            pic = 4;
        } else if (pic === 4) {
            pic4.style.display = "none";
            pic5.style.display = "block";
            pic = 5;
        } else if (pic === 5) {
            pic5.style.display = "none";
            pic1.style.display = "block";
            pic = 1;
        }
    }
}

picSwap();

// tabs for html
let nextech = document.querySelector('#nextech');
let nextechbtn = document.querySelector('#nextechbtn');
let sictc = document.querySelector('#sictc');
let sictcbtn = document.querySelector('#sictcbtn');

// Set initial state
nextech.style.display = "block";
sictc.style.display = "none";

nextechbtn.addEventListener("click", function() {
    nextech.style.display = "block";
    nextechbtn.classList.add("tabon");
    sictc.style.display = "none";
    sictcbtn.classList.remove("tabon");
});
sictcbtn.addEventListener("click", function() {
    nextech.style.display = "none";
    nextechbtn.classList.remove("tabon");
    sictc.style.display = "block";
    sictcbtn.classList.add("tabon");
});