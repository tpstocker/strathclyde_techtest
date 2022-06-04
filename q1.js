// Programming (general)
// Q1. Write pseudocode OR describe the key steps for printing the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// (4 marks)

// A for loop to iterate through numbers. The loop starts at 1, and if the number, i, is equal to or less than 100 then i is increased by 1. The loop will stop when i > 100.
for (let i = 1; i <= 100; i++) {
  // If i divided by 15 (this is the same as 3 and 5) leaves no remainder ie returns an integer, then print out FizzBuzz and return to the for loop in step 1. If there IS a remainder then move onto the next step.
  if (i % 15 === 0) {
    console.log("FizzBuzz");

    // If i divided by 3 leaves no remainder ie returns an integer, then print out 'Fizz' and return to the for loop in step 1. If there IS a remainder then move onto the next step.
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // If i divided by 5 leaves no remainder ie returns an integer, then print out 'Buzz' and return to the for loop in step 1. If there IS a remainder then move onto the last step.
  } else if (i % 5 === 0) {
    console.log("Buzz");
    // This step will print out the integer, i; this is any number that is not a multiple of 3, 5 or 3 and 5 (15).
  } else {
    console.log(i);
  }
}
