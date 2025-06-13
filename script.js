const nextech = document.querySelector('#nextech');
const nextechbtn = document.querySelector('#nextechbtn');
const sictc = document.querySelector('#sictc');
const sictcbtn = document.querySelector('#sictcbtn');

nextechbtn.addEventListener("click", function() {
    nextech.style.display = "block";
    nextechbtn.style.backgroundColor = "#d8b28a";
    sictc.style.display = "none";
    sictcbtn.style.background = "none";
});
sictcbtn.addEventListener("click", function() {
    nextech.style.display = "none";
    nextechbtn.style.background = "none";
    sictc.style.display = "block";
    sictcbtn.style.backgroundColor = "#d8b28a";
});