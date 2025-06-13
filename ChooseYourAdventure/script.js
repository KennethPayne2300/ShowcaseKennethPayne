// Declare variables below to save the different divs of your story.
const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");
const screenThree = document.querySelector(".screen-three");
const screenFour = document.querySelector(".screen-four");
const screenFive = document.querySelector(".screen-five");
const screenSix = document.querySelector(".screen-six");
const screenSeven = document.querySelector(".screen-seven");
const screenEight = document.querySelector(".screen-eight");
const screenNine = document.querySelector(".screen-nine");
const screenTen = document.querySelector(".screen-ten");
const screenEleven = document.querySelector(".screen-eleven");
const screenTwelve = document.querySelector(".screen-twelve");
const screenThirteen = document.querySelector(".screen-thirteen");
const screenFourteen = document.querySelector(".screen-fourteen");
const optionOnebtn = document.querySelector(".option-one-button");
const optionTwobtn = document.querySelector(".option-two-button");
const reset = document.querySelector(".reset");

let screenNumber = 0;
// console.log(optionOneScreen, optionTwoScreen)
// console.log(screenOne.style.display);

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOnebtn.addEventListener('click', function() {
    if (screenNumber == 0) {
        // console.log("option 1 chosen");
        screenOne.style.display = "block";
        screenNumber = 1;
        optionOnebtn.innerHTML = "Fight it";
        optionTwobtn.innerHTML = "talk to it";
    }else if (screenNumber == 1) {
        screenThree.style.display = "block";
        screenNumber = 3;
        optionOnebtn.innerHTML = "Cast FireBall (does 5 damage)";
        optionTwobtn.innerHTML = "say it was just a joke";
    }else if (screenNumber == 2) {
        screenFour.style.display = "block";
        screenNumber = 4;
        optionOnebtn.innerHTML = "tell him the truth";
        optionTwobtn.innerHTML = "tell him youve seen some on the other side of the forest";
    }else if (screenNumber == 3) {
        screenFive.style.display = "block";
        screenNumber = 5;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 4) {
        screenSix.style.display = "block";
        screenNumber = 6;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 9) {
        screenEleven.style.display = "block";
        screenNumber = 11;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 10) {
        screenTwelve.style.display = "block";
        screenNumber = 12;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }
});

optionTwobtn.addEventListener('click', function() {
    if (screenNumber == 0) {
        // console.log("option 1 chosen");
        screenTwo.style.display = "block";
        screenNumber = 2;
        optionOnebtn.innerHTML = "Talk to it";
        optionTwobtn.innerHTML = "continue walking";
    }else if (screenNumber == 1) {
        screenNine.style.display = "block";
        screenNumber = 9;
        optionOnebtn.innerHTML = "Give him directions";
        optionTwobtn.innerHTML = "Send him to the evil wizard";
    }else if (screenNumber == 2) {
        screenTen.style.display = "block";
        screenNumber = 10;
        optionOnebtn.innerHTML = "point her towards the evil wizard to get rid of her";
        optionTwobtn.innerHTML = "tell her you haven't seen any children but even if you did you wouldn't tell her due to the fact that she obviously kidnapped them";
    }else if (screenNumber == 3) {
        screenSeven.style.display = "block";
        screenNumber = 7;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 4) {
        screenEight.style.display = "block";
        screenNumber = 8;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 9) {
        screenThirteen.style.display = "block";
        screenNumber = 13;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }else if (screenNumber == 10) {
        screenFourteen.style.display = "block";
        screenNumber = 14;
        optionOnebtn.style.display = "none";
        optionTwobtn.style.display = "none";
        reset.style.display = "inline";
    }
});

reset.addEventListener("click", function() {
    screenOne.style.display = "none";
    screenTwo.style.display = "none";
    screenThree.style.display = "none";
    screenFour.style.display = "none";
    screenFive.style.display = "none";
    screenSix.style.display = "none";
    screenSeven.style.display = "none";
    screenEight.style.display = "none";
    screenNine.style.display = "none";
    screenTen.style.display = "none";
    screenEleven.style.display = "none";
    screenTwelve.style.display = "none";
    screenThirteen.style.display = "none";
    screenFourteen.style.display = "none";
    optionOnebtn.style.display = "inline";
    optionOnebtn.innerHTML = "Go left";
    optionTwobtn.style.display = "inline";
    optionTwobtn.innerHTML = "Go right";
    reset.style.display = "none";
    screenNumber = 0;
});