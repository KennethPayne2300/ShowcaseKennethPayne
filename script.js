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
if(document.querySelector("#nextech")) {
    let nextech = document.querySelector('#nextech');
    let nextechbtn = document.querySelector('#nextechbtn');
    let sictc = document.querySelector('#sictc');
    let sictcbtn = document.querySelector('#sictcbtn');
    
    // Set initial state
    nextech.style.display = "flex";
    sictc.style.display = "none";
    
    // when the buttons are clicked make the corresponding ones on and the other ones off
    nextechbtn.addEventListener("click", function() {
        nextech.style.display = "flex";
        nextechbtn.classList.add("tabon");
        sictc.style.display = "none";
        sictcbtn.classList.remove("tabon");
    });
    sictcbtn.addEventListener("click", function() {
        nextech.style.display = "none";
        nextechbtn.classList.remove("tabon");
        sictc.style.display = "flex";
        sictcbtn.classList.add("tabon");
    });
}

// table swap

if (document.querySelector(".artclass")) {
    let artclass = document.querySelector(".artclass");
    let others = document.querySelector(".others");
    let artclassbtn = document.querySelector("#class");
    let othersbtn = document.querySelector("#others");

    // initial state
    artclass.style.display = "flex";
    artclassbtn.style.transform = "rotate(0deg)";
    others.style.display = "none";
    othersbtn.style.transform = "rotate(180deg)";

    // when the buttons are clicked make the corresponding ones on and the other ones off
    artclassbtn.addEventListener("click", function() {
        artclass.style.display = "flex";
        artclassbtn.style.transform = "rotate(0deg)";
        others.style.display = "none";
        othersbtn.style.transform = "rotate(180deg)";
    });

    othersbtn.addEventListener("click", function() {
        artclass.style.display = "none";
        artclassbtn.style.transform = "rotate(180deg)";
        others.style.display = "flex";
        othersbtn.style.transform = "rotate(0deg)";
    });
}