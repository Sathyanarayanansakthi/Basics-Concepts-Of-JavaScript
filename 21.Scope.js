//scope in js refers to the current context of code which determine the accessibleity of the varaiable to js
// 2 types of scopes Local scope and global scope  

//local scope declared inside the block 
function num(){
    var a=10
    console.log(a)
}
num()

//global scope declared outside of the block

var number =15
function a(){
console.log(number)
}
console.log(number)
a()