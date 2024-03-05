//Declare coinFlip
let coinFlip;

//Init counter
let streak = 0;

do {
//Gen random number (0 or 1) for coin flip
    coinFlip = Math.floor(Math.random() * 2);

//Check result of coin flip and display result
    if (coinFlip === 0) {
        console.log("Heads ");
//Increment streak if "Heads" flipped
        streak++; 
       
    } else {
        console.log("Tails ");
//End loop if "Tails" flipped
    }
} while (coinFlip === 0);

//Display streak
console.log("Streak: " + streak);