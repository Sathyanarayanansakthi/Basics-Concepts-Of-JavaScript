//function declaration in js
//  is a normal function
function World(){
    console.log('Hi Soilders')}
World()

//function Expression in js 
//means the function stores is the const variable 
 
const greet=function(){
    console.log('Hi soilders')
}
greet();
 
//named function expressaional same like a functional expressional but we declear a name
 const hi= function  sayhello(){console.log('hello soilders')}
 hi()

 //constructor function are used to create objects they  are called eith the new keyword
 function Person(name,age){this.name=name ;this.age=age;}
 const jhon= new Person('Jhon',15)

 console.log(jhon.name);console.log(jhon.age)