/*
    1. Create a for loop that iterates while the index is less than or equal to 10.
    2. In each iteration:
        * Generate a new random number between 1 and 10 (hint: check the documentation regarding Math.floor and Math.random methods)
        * Evaluate if the random number is greater than or equal to 5
        * If it is greater than or equal to 5, print "Logged In with (number)!"
        * If it is less than 5, print "Logged Out with (number)!"
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i <= 10; i++) {
    let number = getRandomNumber(1, 10);;
  
    if (number >= 5) {
      console.log(`Logged In with (${number})!`);
    } else {
      console.log(`Logged Out with (${number})!`);
    }
}
