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

// sep 30
// event handler
let btnpress = document.querySelector(".btnpress")
btnpress.onclick = function(){alert(`${new Date()}`)}

// mouse events

let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function(){
    circle_paragraph.textContent += " CIRCLE"}

//event listeer
let box_color = document.querySelector(".box_color")

const randomRGB = function(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}
box_color.addEventListener("mouseout", function(){
    box_color.style.backgroundColor = randomRGB()
})

//key event 
// collect the element
let inputtext = document.querySelector(".inputtext")
let usernmae_paragraph = document.querySelector(".username_paragraph")
inputtext.addEventListener("keydown", function(){
    usernmae_paragraph.textContent = "Username MUST have 3+ characters"
})

// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1")
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.addEventListener("mouseout", function(){
    ps1.textContent = "Elias Muniz"
})

// search for the second p with class ps2
let ps2 = document.querySelectorAll(".ps2")[1]

// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
ps2.addEventListener("click", function(){
    ps2.style.fontSize = "25px"
    ps2.style.color = "olive"
})

// search for the first div with class divs2
let divs2_1 = document.querySelectorAll(".divs2")[0]
console.log(divs2_1)

// add a click event to change the background color to indigo
divs2_1.addEventListener("click", function(){
    divs2_1.style.backgroundColor = "indigo"
})

// search for the second div with class divs2
let divs2_2 = document.querySelectorAll(".divs2")[1]
console.log(divs2_2)

// add a keydown event to change the width of divs2 to 300px
divs2_2.addEventListener("keydown", function(){
    divs2_2.style.width = "300px"
})
