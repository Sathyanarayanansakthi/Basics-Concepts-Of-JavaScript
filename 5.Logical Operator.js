//logical operator determine equality or difference between variables or values.
//refer 2.40.00
// logical AND &&   This operator returns true if both operands are true; otherwise, it returns false.
const abc=true;
const bbd=false;
const cde=4;
console.log (abc && bbd); //false

const ads=true;
const fps=true;
console.log(ads && fps ); //true
//logical OR ||    This operator returns true if both operands are true; otherwise, it returns false.
const qq=true;
const ss=false;
console.log(qq || ss); //true

const qa=false;
const aa=false;
console.log(qa || aa); //false

const qd=false;
const xa=false;
console.log(qd || xa); //false

// logical NOT !   like a toggler  This operator returns the opposite boolean value of the operand. If the operand is true, it returns false, and if the operand is false, it returns true.



let password='Sathya'
if(password.length >= 6 && password.includes('Sa')){
    console.log('Vaild Passowrd')
}else{
    console.log("Invaild Password");   //Vaild Password
}

