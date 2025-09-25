/**
 * Elias Muniz
 * ET712 Fall 2023
 */
console.log("Full name: Elias Muniz")
console.log("Lab 7 - Structure examples")
//acess(select) element by class name
let titlenode = document.querySelector("#title")
console.log(titlenode)

// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)

// access(select) element by tag name
let heading1 = document.querySelector("h1")
console.log(heading1)

// access(select) all elements by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("Loop through each elemeent in the node list")
for(let index = 0; index < description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
}

// collect(select) all elements 
let shapediv = document.querySelector(".shapeDivision")
let btn_squre = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add an event to each button
btn_squre.addEventListener("click", function(){
    shapediv.className = "square"
    shapediv.textContent = "Square".toUpperCase()
    shapediv.style.backgroundColor = "gold";
})

btn_circle.addEventListener("click", function(){
    shapediv.className = "circle"
    shapediv.textContent = "Circle".toUpperCase()
    
})

btn_rectangle.addEventListener("click", function(){
    shapediv.className = "rectangle"
    shapediv.textContent = "Rectangle".toUpperCase()
})