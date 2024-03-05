//Prompt for num
let userIn = prompt("Enter number:");

//Convert input to int
let num = parseInt(userIn);

//Check input valid num
if (!isNaN(num)) {

//Countdown to 0
    for (let i = num; i >= 0; i--) {
        console.log(i + '\n');
    }
} else {
    console.log("Invalid input, enter valid number.");
}