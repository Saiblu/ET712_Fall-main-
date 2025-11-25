/* 
Elias Muniz 
Homework 3 - Objects and exception handling in JS
*/
// Creating an object name Movie 
let Movie = {  // Creating the object for the movie 'Cars'
    title: "Cars",
    director: "John Lasseter",
    year: 2006
};
console.log("Movie Object:", Movie);

// Accessing properties, to print them.
console.log("Title:", Movie.title);
console.log("Director:", Movie.director);
console.log("Year:", Movie.year);

// Using getDetails() which will return a formatted string.
Movie.getDetails = function() {
    return `${this.title}, directed by ${this.director}, released in ${this.year}`;
};