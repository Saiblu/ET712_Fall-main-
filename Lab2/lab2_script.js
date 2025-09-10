// This is an example of how to link the script to an html file
console.log("Lab 2 by Elias Muniz")
console.log('\n ------Example 1: array-------')
// create and initialize an array
let fruits = ["apple", " orange", "grapes", "Banana", "Kiwi", "Pineapple"]
console.log(` The 3rd Fruit = ${fruits[2]}`)
console.log(`There are ${fruits.length} fruits in the list`)
// Remove the first element in array fruits using method 'Shift()'
console.log (`original array ${fruits} `)
fruits.shift()
console.log (`Remove the 1st element in array fruits = ${fruits}`)
// add elements to the list from the left, only the start of the list
fruits.unshift(25, "Mango", true)
console.log(`updated array with three new elements = ${fruits}`)
// add elements to the end of the list to the right side
fruits.push("Peter", 100)
console.log(`update array with two new elements to the right = ${fruits}`)
//finding the index of a element 
let index_blueberries = fruits.indexOf("blueberries")
console.log(`What is the index of 'blueberries'? ${index_blueberries}`)
// if the return index = '-1' means it doesn't exist on the list at all.
let index_Peter = fruits.indexOf("Peter")
console.log(`What is the index of 'Peter'? ${index_Peter}`)

console.log('\n ------Example 2: If Statement -------')
//Mostly to check if the statement is true. Depending on the conditions are true. 
// Then the end result will be either true or false.
let day = true
let night = false
//Check if it is true
if(day){
    console.log ('Good Morning') //Only if the value that you set it to is true. If it's false, then the line itself will run and skip over.
}
console.log('END')

let n1 = 10
let n2 = "10"

console.log(`n1 is equal to n2 --> ${n1===n2}`)

console.log (`END 2`)

if (n1===n2){
    console.log(`n1 is exactly equal to n2 ---> ${n1===n2}`)
}

console.log("End 3")

console.log("\n ------ Example 4: check if a number is even or odd-----")
// if-else check two conditions

let number = 10

if (number%2 === 0 ) {
    console.log(`${number} is Even`)
}
else{
    console.log(`${number} is ODD`)
}

console.log("\n----Example 5: check if an input is a string or number ------ ")
let user_input = prompt ("Enter a username")
let check_username = isNaN(parseFloat(user_input))
console.log(`${user_input} is not a number? ${check_username}`)
if(check_username){
    console.log(`${user_input} is a STRING`)
}
else{
    console.log(`${user_input} is a Number`)
}

console.log("\n----Example 5: check if an input is a string or number ------ ")
let num1 = 9
let num2 = "9"
if(num1 === num2) {
    console.log(`num1 is Exactly equal to num2`)
}
else if (num1>num2){
    console.log("num1 is LESS THAN num2")
}
else{
    console.log("ERROR: unable to compare")
}

console.log("\n----- Example 7: switch statement -----")
let gender = prompt("Enter a gender")

switch(gender){
    case "Female": case "FEMALE": case "F": case "f": case "female":
        console.log("Selected gender = FEMALE")
        break
    case "Male":
        console.log("Selected gender = MALE")
        break
    case "Other": case 'OTHER': case "other": case "o": case "o": 
        console.log("Selected gender = OTHER")
        break
    default:
        console.log("Error: unable to read the selected gender")
}   

console.log("\n ------Exercise 1------")

let users_input = prompt("Enter a number")
let check_number = isNaN(parseFloat(users_input))
console.log(`${users_input} is not a number? ${check_number}`)
if(!check_number){
    if(users_input < 0){ 
        console.log(`${users_input} is a negative number`);
    } else if(users_input == 0) {
        console.log(`${users_input} is zero`);
    } else {
        console.log(`${users_input} is a positive number`);
    }
} else {
    console.log(`${users_input} is a string`);
}

console.log("\n ------Exercise 2------")

let colors = ["Red" , "blue", "orange", "Magenta"]
let user_colors = prompt("Enter a color ")

switch(user_colors) {
    case "Red": case "RED": case "red":
        console.log("You selected RED")
        break
    case "Blue": case "BLUE": case "blue":
        console.log("You selected BLUE")
        break
    case "Orange": case "ORANGE": case "orange":
        console.log("You selected ORANGE")
        break
    case "Magenta": case "MAGENTA": case "magenta":
        console.log("You selected MAGENTA")
        break
    default:
        console.log("Error: unable to read the selected color")
}
