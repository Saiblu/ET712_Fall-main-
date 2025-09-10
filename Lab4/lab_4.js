/* 
ELias Muniz 
Lab 4, functions
Sep 9, 2025
*/
console.log("Elias Muniz, Lab 4")
// define a funtions to ptint a message
function msg(){
    console.log("---Example 1 -----")
    console.log("How are you?")
}

function printCount(){
    console.log("---Example 2 -----")
    for(let n = 3; n > 0; n--){
        console.log(n)
    }
}
// define a function that a passed a username 
function greeting(username){
    console.log("---Example 3 -----")
    console.log("Welcome to JS " + username)
}
// define a function passes a message and prints lowercase and uppercase
function upperMessage(message){
    console.log("---Example 4 -----")
    let changeUpper = message.toUpperCase()
    console.log(changeUpper)
}
// define a function to simulate a snake eyes game.
//pass two numbers to the function and check if they are both numbers are '1'
function isSnakeEyes(die1, die2){
    console.log("---Example 5 -----")
    if(die1 === 1 && die2 === 1){
        console.log("Snake eyes!")
    }else{
        console.log("Not snake eyes.")
    }
}
// call the functions that returns the area of a rectangle
function areaRectangle(length, width){
    console.log("---Example 6 -----")
    return length * width 
}

// define a function to check a temperature. If the temperature is above 75, return true. otherwise, i returns false.
function checkTemperture(temperature){
    if (temperature >= 75){
        return true
    }else{
        return false
    }   
}

// excercise for lab 4/ homework
function checkName() {
    let name;
    while (true) {
        name = prompt("Enter your name:");
        if (name === null || name.trim() === "") {
            name = prompt("You forgot to enter a name. Enter a name again:");
        } else if (!isNaN(name)) {
            name = prompt(`${name} is invalid! Enter a name again:`);
        } else {
            console.log(`Welcome ${name.toUpperCase()} to the class!`);
            break;
        }
    }
}