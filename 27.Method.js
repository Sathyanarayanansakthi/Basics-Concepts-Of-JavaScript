// Defining a method outside the object
// method are used to perform a action using the data contained in an object
function greet() {
   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
 }

 const person = {
   name: "John",
   age: 30,
   greet,
 };

console.log(person.greet());

 //or another way
const Person = {
    name: "HuXn",
    age: 19,
    greet: function greet() {
      return `Hello, my name is ${Person.name} and I am ${person.age} years old.`;
    },
  };
  
  console.log(Person.greet());
 