// JavaScript goes here.
// index stuff
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let option1q1 = document.querySelector(".oneq1");
let option2q1 = document.querySelector(".twoq1");
let option1q2 = document.querySelector(".oneq2");
let option2q2 = document.querySelector(".twoq2");
let option1q3 = document.querySelector(".oneq3");
let option2q3 = document.querySelector(".twoq3");
let option1q4 = document.querySelector(".oneq4");
let option2q4 = document.querySelector(".twoq4");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");

let choice1;
let choice2;
let choice3;
let choice4;

option1q1.addEventListener("click", function() {
    choice1 = 1;
    option1q1.disabled = true;
    option2q1.disabled = true;
    question2.style.display = "block";
});
option2q1.addEventListener("click", function() {
    choice1 = 2;
    option1q1.disabled = true;
    option2q1.disabled = true;
    question2.style.display = "block";
});
option1q2.addEventListener("click", function() {
    choice2 = "action";
    option1q2.disabled = true;
    option2q2.disabled = true;
    question3.style.display = "block";
});
option2q2.addEventListener("click", function() {
    choice2 = "comedy";
    option1q2.disabled = true;
    option2q2.disabled = true;
    question3.style.display = "block";
});
option1q3.addEventListener("click", function() {
    choice3 = 1;
    option1q3.disabled = true;
    option2q3.disabled = true;
    question4.style.display = "block";
});
option2q3.addEventListener("click", function() {
    choice3 = 2;
    option1q3.disabled = true;
    option2q3.disabled = true;
    question4.style.display = "block";
});
option1q4.addEventListener("click", function() {
    choice4 = 1;
    option1q4.disabled = true;
    option2q4.disabled = true;
    Checkresults();
});
option2q4.addEventListener("click", function() {
    choice4 = 2;
    option1q4.disabled = true;
    option2q4.disabled = true;
    Checkresults();
});

function Checkresults() {
    if (choice1 === 1) {
        if (choice2 === "action") {
            if(choice3 === 1) {
                if (choice4 === 1) {
                    result1.style.display = "block";
                } else {
                    result2.style.display = "block";
                }
            } else {
                if (choice4 === 1) {
                    result2.style.display = "block";
                } else {
                    result2.style.display = "block";
                }
            }
        } else {
            if(choice3 === 1) {
                if (choice4 === 1) {
                    result1.style.display = "block";
                } else {
                    result2.style.display = "block";
                }
            } else {
                if (choice4 === 1) {
                    result1.style.display = "block";
                } else {
                    result1.style.display = "block";
                }
            }
        }
    } else {
        if (choice2 === "action") {
            if(choice3 === 1) {
                if (choice4 === 1) {
                    result3.style.display = "block";
                } else {
                    result3.style.display = "block";
                }
            } else {
                if (choice4 === 1) {
                    result4.style.display = "block";
                } else {
                    result4.style.display = "block";
                }
            }
        } else {
            if(choice3 === 1) {
                if (choice4 === 1) {
                    result3.style.display = "block";
                } else {
                    result3.style.display = "block";
                }
            } else {
                if (choice4 === 1) {
                    result4.style.display = "block";
                } else {
                    result4.style.display = "block";
                }
            }
        }
    }
}