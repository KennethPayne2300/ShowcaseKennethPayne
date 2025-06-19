// tabs for html
const nextech = document.querySelector('#nextech');
const nextechbtn = document.querySelector('#nextechbtn');
const sictc = document.querySelector('#sictc');
const sictcbtn = document.querySelector('#sictcbtn');

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