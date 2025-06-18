// tabs for html
const nextech = document.querySelector('#nextech');
const nextechbtn = document.querySelector('#nextechbtn');
const sictc = document.querySelector('#sictc');
const sictcbtn = document.querySelector('#sictcbtn');
const body = document.querySelector('#wrapper');

let type;

// Set initial state
nextech.style.display = "block";
sictc.style.display = "none";
// Set initial button styles
if (body.className === "dark") {
    nextechbtn.style.backgroundColor = "#74614d";
} else {
    nextechbtn.style.backgroundColor = "#DF9999";
}

nextechbtn.addEventListener("click", function() {
    type = "nextech";
    nextech.style.display = "block";
    if (body.className === "dark") {
        nextechbtn.style.backgroundColor = "#74614d";
    } else {
        nextechbtn.style.backgroundColor = "#DF9999";
    }
    sictc.style.display = "none";
    sictcbtn.style.background = "none";
});
sictcbtn.addEventListener("click", function() {
    type = "sictc";
    nextech.style.display = "none";
    nextechbtn.style.background = "none";
    sictc.style.display = "block";
    if (body.className === "dark") {
        sictcbtn.style.backgroundColor = "#74614d";
    } else {
        sictcbtn.style.backgroundColor = "#DF9999";
    }
});

// dark/light mode
let toggle = document.querySelector("#darkmode");

toggle.addEventListener("click", function() {
    
    if (body.className === "light") {
        if (type === "nextech") {
            nextechbtn.style.backgroundColor = "#DF9999";
        } else {
            sictcbtn.style.backgroundColor = "#DF9999";
        }
    } else {
        if (type === "nextech") {
            nextechbtn.style.backgroundColor = "#74614d";
        } else {
            sictcbtn.style.backgroundColor = "#74614d";
        }
    }
})