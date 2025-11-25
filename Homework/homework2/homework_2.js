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

// Exercise 1: name_counting() function
function name_counting(arrLength) {
    let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
    let count = 0;
    for (let i = 0; i < arrLength; i++) {
        if (names[i].length < 5) {
            count++;
        }
    }
    return count;
}

// Test the function
let result = name_counting(5);
console.log(`Number of names with less than 5 characters: ${result}`);

// Exercise 2: checkNum() function
function checkNum() {
    let num;
    while (true) {
        let input = prompt("Enter a number:");
        num = Number(input);
        if (input === null || input.trim() === "" || isNaN(num)) {
            // Invalid input, ask again
            continue;
        } else {
            break;
        }
    }
    return num % 2 === 0 ? "even" : "odd";
}
