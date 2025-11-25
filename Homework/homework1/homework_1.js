/*
Homework 1: control flow and loops
Student’s name: Elias Muniz
*/

// ------ Program 1: conditional statement ------
console.log("\n------ Program 1: conditional statement -----");

let userInput = prompt("Enter something:");

if (userInput === null) {
    console.log("Null and void!");
} else if (userInput === "") {
    console.log("Your answer was blank!");
} else {
    let num = Number(userInput);
    if (!isNaN(num)) {
        if (num > 0) {
            console.log("Think positively!");
        } else if (num < 0) {
            console.log("Never have negative balance!");
        } else {
            console.log("Yin and Yang!");
        }
    } else {
        console.log("You did not enter a number!");
    }
}

// ------ Program 2: for loop and nested conditional statement ------
console.log("\n------ Program 2: for loop and nested conditional statement -----");

let numbers = [];
for (let i = 0; i < 10; i++) {
    let value = prompt(`Enter number ${i + 1}:`);
    let num = Number(value);
    if (!isNaN(num) && value !== null && value !== "") {
        numbers.push(num);
    } else {
        numbers.push(0); // Default to 0 if invalid input
    }
}

let count3 = 0, count5 = 0, count7 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) count3++;
    if (numbers[i] % 5 === 0) count5++;
    if (numbers[i] % 7 === 0) count7++;
}

console.log(`${count3} numbers are multiple of 3`);
console.log(`${count5} numbers are multiple of 5`);
console.log(`${count7} numbers are multiple of 7`);