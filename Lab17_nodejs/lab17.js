console.log("Elias Muniz - Lab 17, nodejs");
console.log('---------Example 1: console methods-------')
console.warn("This is a warning message");
console.error("This is an error message");
console.trace("This is a trace message");

setTimeout(() => {
    console.warn("Warning!!!! This message will be timed out for the next line")
}, 3000);

console.log('---------Example 2: creating a simple module file-------')
const name = require("./mod")

console.log(name.helper("Elias Muniz"));
console.log(name.id(12345))
console.log(name.email("elias@example.com"))

console.log('---------Example 3: Event emitter-------')
let events = require('events');
let eventEmitter = new events.EventEmitter();

eventEmitter.on('Login', function(a){
    console.log(`${a} has logged in successfully.`);
});

eventEmitter.emit('Login', 'Elias Muniz');