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
} else {
    body.className = "dark";
    toggle.style.backgroundColor = "white";
    toggle.style.color = "black";
}

toggle.addEventListener("click", function() {
    // everytime the toggle button is clicked switch the modes
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
    let profile = document.querySelector(".profile");
    
    let pic = 1;
    let id = setInterval(frame, 3000);

    function frame() {
        if (pic === 1) {
            profile.src = "https://images.pexels.com/photos/6624305/pexels-photo-6624305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
            pic = 2;
        } else if (pic === 2) {
            profile.src = "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg";
            pic = 3;
        } else if (pic === 3) {
            profile.src = "https://image.shutterstock.com/image-photo/young-brazilian-man-isolated-on-260nw-2242569333.jpg";
            pic = 4;
        } else if (pic === 4) {
            profile.src = "https://i.redd.it/j02itmog3t721.jpg";
            pic = 5;
        } else if (pic === 5) {
            profile.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s";
            pic = 1;
        }
    }
}

if(document.querySelector(".profile")) {
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

// footer
let footer = document.createElement("footer");

footer.innerHTML = `
    <div class="small divider"></div>
    <footer>
        <p>
            Evansville IN USA<br>
            Contact: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kennethpayne353@gmail.com" target="_blank">Kenneth.payne353@gmail.com</a><br>
            <a href="tel:812-604-3956" class="mobile">812-604-3956</a>
            <span class="desktop">812-604-3956</span>
        </p>
    </footer>`;
    
document.querySelector(".content").appendChild(footer);