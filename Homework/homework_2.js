// control flow, loops, and functions

// Function to check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Function to collect numbers from the user
function collectNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        let input = prompt(`Enter number ${i + 1}:`);
        let num = Number(input);
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.log("Invalid input, defaulting to 0.");
            numbers.push(0);
        }
    }
    return numbers;
}

// Main script
console.log("---- Homework 2: Control Flow, Loops, and Functions ----");

let nums = collectNumbers(5);

for (let i = 0; i < nums.length; i++) {
    let type = checkEvenOdd(nums[i]);
    console.log(`Number ${nums[i]} is ${type}.`);
}

let sum = 0;
for (let n of nums) {
    sum += n;
}
console.log(`Sum of all numbers: ${sum}`);

console.log("---- End of Homework 2 ----");
