//callbacak function is  a function that is passed into  another function an an arugument


function showCallfunc(fn) {const value=10 ;  
    fn(value);
}
showCallfunc (function (value){ 
    console.log(value) })




function greet(name, cb) {
console.log(`Hello ${name}`);
cb();
}
// callback function
function callMe() {
  console.log("I am callback function");
}
// passing function as an argument (callback)
greet("Peter", callMe);
