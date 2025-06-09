const nextech = document.getElementById('nextech');
const sictc = document.getElementById('sictc');

function switchtabs(btn) {
    if(btn == "nextech"){
        nextech.style.display = "block";
        sictc.style.display = "none";
    }else if(btn == "sictc"){
        nextech.style.display = "none";
        sictc.style.display = "block";
    }
}