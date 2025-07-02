// dark/light mode
let toggle = document.querySelector("#darkmode");
let body = document.querySelector("#wrapper");

let mode = "light";

// make sure there is a "mode" key in the localStorage
if (localStorage.getItem("mode") !== null){
    mode = localStorage.getItem("mode");
};

// make it be the corresponding colors
if (mode === "light") {
    body.className = "light";
    toggle.style.backgroundColor = "black";
    toggle.style.color = "white";
    toggle.innerHTML = "change to dark mode";
} else {
    body.className = "dark";
    toggle.style.backgroundColor = "white";
    toggle.style.color = "black";
    toggle.innerHTML = "change to light mode";
}

toggle.addEventListener("click", function() {
    // everytime the toggle button is clicked switch the modes
    if (mode === "light") {
        body.className = "dark";
        mode = "dark";
        toggle.style.backgroundColor = "white";
        toggle.style.color = "black";
        toggle.innerHTML = "change to light mode";
    } else {
        body.className = "light";
        mode = "light"
        toggle.style.backgroundColor = "black";
        toggle.style.color = "white";
        toggle.innerHTML = "change to dark mode";
    };
    localStorage.setItem("mode", mode);
});

// picswitch
function picSwap() {
    let profile = document.querySelector("#me");
    
    let pic = 1;
    let id = setInterval(frame, 3000);

    function frame() {
        if (pic === 1) {
            profile.src = "Assets/HeadShots/Headshot2.png";
            pic = 2;
        } else if (pic === 2) {
            profile.src = "Assets/HeadShots/Headshot3.png";
            pic = 3;
        } else if (pic === 3) {
            profile.src = "Assets/HeadShots/Headshot4.png";
            pic = 4;
        } else if (pic === 4) {
            profile.src = "Assets/HeadShots/Headshot5.png";
            pic = 5;
        } else if (pic === 5) {
            profile.src = "Assets/HeadShots/Headshot6.png";
            pic = 6;
        } else if (pic === 6) {
            profile.src = "Assets/HeadShots/Headshot1.png";
            pic = 1;
        }
    }
}

if(document.querySelector("#me")) {
    picSwap();
}

// organisation swap
// tabs for html
if(document.querySelector("#tab1")) {
    let tab1 = document.querySelector('#tab1');
    let tab1btn = document.querySelector('#tab1btn');
    let tab2 = document.querySelector('#tab2');
    let tab2btn = document.querySelector('#tab2btn');
    
    // Set initial state
    tab1.style.display = "flex";
    tab2.style.display = "none";
    
    // when the buttons are clicked make the corresponding ones on and the other ones off
    tab1btn.addEventListener("click", function() {
        tab1.style.display = "flex";
        tab1btn.classList.add("tabon");
        tab2.style.display = "none";
        tab2btn.classList.remove("tabon");
    });
    tab2btn.addEventListener("click", function() {
        tab1.style.display = "none";
        tab1btn.classList.remove("tabon");
        tab2.style.display = "flex";
        tab2btn.classList.add("tabon");
    });
}

