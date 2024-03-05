//Declare var coinFlip
let coinFlip;

//Prompt user for times to flip
let numFlip = prompt("Number of times to flip  coin:");

//Convert input to number
numFlip = parseInt(numFlip);

//Check numFlip is number
if (!isNaN(numFlip) && numFlip > 0) {
	for (let i = 0; i < numFlip; i++) {
	    
//Generate random number (0 or 1) for flip
		coinFlip = Math.floor(Math.random() * 2);

//Check result of coin flip, display result
		if (coinFlip === 0) {
			console.log("Heads ");
		} else {
			console.log("Tails ");
		}
	}
} else {
	console.log("Invalid input. Enter valid number greater than 0.");
}