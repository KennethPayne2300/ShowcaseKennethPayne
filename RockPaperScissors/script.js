// get the elements
const player1 = document.querySelector(".one");
const player2 = document.querySelector(".two");
const status = document.getElementById('status');

// console.log(player1, player2, status)

// make the global variables
let one;
let two;
let three;
let play1;
let play2;

// get when 1, 2, or 3 is pressed
document.addEventListener("keydown", function(event) {
    if(event.key === "1"){
        one = true;
    }else if(event.key === "2"){
        two = true;
    }else if(event.key === "3"){
        three = true;
    }
    keypress()
});

// get when 1, 2, or 3 is unpressed
document.addEventListener("keyup", function(event) {
    if(event.key === "1"){
        one = false;
    }else if(event.key === "2"){
        two = false;
    }else if (event.key === "3"){
        three = false;
    }
});

// when they are pressed change the picture to the corresponding picture
function keypress() {
    if (one){
        player1.src = 'assets/Rock.png';
        play1 = 'rock';
    }else if (two){
        player1.src = 'assets/Paper.png';
        play1 = 'paper';
    }else if (three){
        player1.src = 'assets/Scissors.png';
        play1 = 'scissors';
    };
    // let the ai choose
    aipress();
};

function aipress() {
    // make the ai choose a random number between 1 to 3
    let randomnumber = Math.floor(Math.random()*3)+1;
    // console.log(randomnumber)
    // change the picture to the corresponding object
    if(randomnumber == 1){
        player2.src = 'assets/Rock.png';
        play2 = 'rock';
    }else if(randomnumber == 2){
        player2.src = 'assets/Paper.png';
        play2 = 'paper';
    }else if(randomnumber == 3){
        player2.src = 'assets/Scissors.png';
        play2 = 'scissors';
    };

    // console.log(player1.src, player2.src);
    
    // if they are the same tell them its a tie
    if(play1 == play2){
        status.innerHTML = "Its a tie!!";
    }else if(play1 == 'rock'){
        // if player 1 chose rock and 2 chose scissors 1 wins
        if(play2 == 'scissors'){
            status.innerHTML = "Congratulations you won!!";
            // if player 1 chose rock and 2 chose paper than 2 wins
        }else if(play2 == 'paper'){
            status.innerHTML = "Sorry you lost";
        }
    }else if(play1 == 'paper'){
        // if player 1 chose paper and 2 chose rock 1 wins
        if(play2 == 'rock'){
            status.innerHTML = "Congratulations you won!!";
        }else if (play2 == 'scissors'){
        // if player 1 chose paper and 2 chose scissors than 2 wins
            status.innerHTML = "Sorry you lost";
        }
    }else if(play1 == 'scissors'){
        // if player 1 chose scissors and 2 chose paper 1 wins
        if(play2 == 'paper'){
            status.innerHTML = "Congratulations you won!!";
        // if player 1 chose scissors and 2 chose rock 2 wins
        }else if (play2 == 'rock'){
            status.innerHTML = "Sorry you lost";
        }
    }
}