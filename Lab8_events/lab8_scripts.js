/**
 * Elias Muniz
 * Lab 8, events   
 * October 7, 2025
 */
console.log("Elias Muniz - Lab 8, events");

// Safely select elements and check existence before adding listeners
const btnpressme = document.querySelector(".btnpressme");
if (btnpressme) {
    btnpressme.addEventListener("click", function(e) {
        if (e.target.textContent === "Press Me!!!") {
            e.target.textContent = "You Pressed Me!!!";
        } else {
            e.target.textContent = "Press Me!!!";
        }
        // Toggle between classes in css
        e.target.classList.toggle("btnactive");
        e.target.classList.toggle("btninactive");
    });
}

/** event delegation    */
const list = document.querySelector("#list");
if (list) {
    list.addEventListener("click", function(event) {
        // check if the clicked element is an <li>
        if (event.target.tagName.toLowerCase() === "li") {
            // remove the clicked <li> item
            event.target.remove();
        }
    });
}

// Prevent default behavior of a link
const qcclink = document.querySelector(".qcclink");
if (qcclink) {
    qcclink.addEventListener("click", function(e) {
        e.preventDefault();
        alert("QCC website is under maintenance");
    });
}

/* Window Event */
const btnscrollby = document.querySelector(".btnscrollby");
if (btnscrollby) {
    btnscrollby.addEventListener("click", function() {
        window.scrollBy(100, 0);
    });
}

/** Photo gallery scroll buttons */
const btnleft = document.querySelector(".btnleft");
const btnright = document.querySelector(".btnright");
const gallery = document.querySelector(".gallery-container");

// Define a function to scroll the gallery by an image size
function scrollGalleryBy(pixels) {
    if (gallery) {
        gallery.scrollBy(pixels, 0);
    }
}

// Add event to each button
if (btnleft) {
    btnleft.addEventListener("click", function() {
        scrollGalleryBy(-200);
    });
}
if (btnright) {
    btnright.addEventListener("click", function() {
        scrollGalleryBy(200);
    });
}

// Lab exercise: Circular counter
const circleCounter = document.getElementById("circleCounter");
const resetBtn = document.getElementById("resetBtn");
let count = 0;

if (circleCounter) {
    circleCounter.addEventListener("click", function() {
        count++;
        circleCounter.textContent = count;
    });
}

if (resetBtn) {
    resetBtn.addEventListener("click", function() {
        count = 0;
        circleCounter.textContent = count;
    });
}
