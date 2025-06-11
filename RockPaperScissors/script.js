const player1 = document.querySelector(".one");
const player2 = document.querySelector(".two");
const status = document.getElementById('status');

// console.log(player1, player2, status)
let one;
let two;
let three;
let play1;
let play2;

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

document.addEventListener("keyup", function(event) {
    if(event.key === "1"){
        one = false;
    }else if(event.key === "2"){
        two = false;
    }else if (event.key === "3"){
        three = false;
    }
});

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
        aipress();
};

function aipress() {
    let randomnumber = Math.floor(Math.random()*3)+1;
    // console.log(randomnumber)
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
    
    if(play1 == play2){
        status.innerHTML = "Its a tie!!";
    }else if(play1 == 'rock'){
        if(play2 == 'scissors'){
            status.innerHTML = "Congratulations you won!!";
        }else if(play2 == 'paper'){
            status.innerHTML = "Sorry you lost";
        }
    }else if(play1 == 'paper'){
        if(play2 == 'rock'){
            status.innerHTML = "Congratulations you won!!";
        }else if (play2 == 'scissors'){
            status.innerHTML = "Sorry you lost";
        }
    }else if(play1 == 'scissors'){
        if(play2 == 'paper'){
            status.innerHTML = "Congratulations you won!!";
        }else if (play2 == 'rock'){
            status.innerHTML = "Sorry you lost";
        }
    }
}