// Declare the variable coinFlip
let coinFlip;

// Prompt the user for the number of times to flip the coin
let numFlips = prompt("Enter the number of times to flip the coin:");

// Convert the input to a number
numFlips = parseInt(numFlips);

// Check if numFlips is a valid number
if (!isNaN(numFlips) && numFlips > 0) {
    // Loop numFlips times
    for (let i = 0; i < numFlips; i++) {
        // Generate a random number (0 or 1) for the coin flip
        coinFlip = Math.floor(Math.random() * 2);

        // Check the result of the coin flip and display the result
        if (coinFlip === 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
} else {
    console.log("Invalid input. Please enter a valid number greater than 0.");
}