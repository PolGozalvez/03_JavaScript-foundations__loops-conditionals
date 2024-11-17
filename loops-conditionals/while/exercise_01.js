/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let i = 10;
while (i <= 40) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

let j = 10;
while (j <= 40) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}
