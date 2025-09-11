console.log("Elias Muniz")
// Example 1
// anonymous function in a variable
let greet = function (username) {
    console.log("Welcome to funtions " + username + "!");
}
// arrow functions
let greeting = (username) => {
    console.log(`Welcome to arrow functions ${username}!`);
}

//Example 2: default parameters
function rand_number(x) {
   for(let n =1; n <= x; n++){
    let num = Math.ceil(Math.random() * 9);
    console.log(num);
    }
}

//example 3: spread syntax....
numbers = [2, 0, -10, 5, 8, -9]
let max_number = Math.max(...numbers)
console.log(`\n---- Example 3: spread -----`)
console.log(`The maximum number is = ${max_number}`)

//Example 4: create an object with a function
const car = {
    //properties
    type: "Fiat",
    model: "500",
    color: "white",
    
    //method
    car_description : function() {
        return `Car type = ${this.type}, model = ${this.model}, color = ${this.color}`
    }
}

// example 5: create an object with 'myMath' that will caculate a permimeter or the area of a rectangle
const myMath = {
    perimeter : function(w=0, l=0){return (2*w + 2*l)},
    area : function(w=0, l=0){return w*l}
}

//Example 6
const cat = {
    name: "Mickey",
    color:"Black with white spots",
    breed: "unknown",

    //method
    meow: ()=> {console.log("Meowwwwwwwww!")}
}

// Example 7
const hen= {
    name: "Helen",
    color: "Brown",
    eggCount: 0,

    //Method
    layAnEgg(){
        this.eggCount++;
        return `${this.name} has laid an egg!`
    },
    resetEggCount(){
        this.eggCount = 0
        return `${this.name}'s egg count has been reset to ${this.eggCount}`
    }

}

// Example 8: try-catch

function yell(message="") {
    try {
        console.log(message.toUpperCase().repeat(3))
    } catch (error) {
        console.log(error)
        console.log(`Please pass a string next time!`)
    } finally {
        console.log("Execution completed.")
    }
}
console.log("Execution completed.")


//Excercise 1
function myCaculator
