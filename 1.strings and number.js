// string are seq. char. 
//strings writen in  quotes '' and  ""
//number written in non quotes 

console.log("hi soilders") //its a string]
console.log('hi soilders') //sring
console.log(12344) //its a number data type

//for over a string
var letters='abc'
for (var i=0; i<letters.length; i++)
    console.log(letters[i])

/strings
//text use strings a we can use  '',""  for strings
let fName='sathya';
console.log(fName);

let Sname="kp";
console.log(Sname);

//string concatenate  means linking together in one unit
let fN='sn';
let Sn="kp";
let fullName=fN+Sn;
console.log(fullName);  
//for space in between we have 2 types adding  EX:fN+''+Sn at the last let


//Append operator
let FN='sn';
FN += 'S';
console.log(FN);

//Length operator is used to check the lenght of the variable
console.log(fName.length);  //opis 6
 
//cases  used to convert all lower to upper case all lower to upper case 
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//slice operator  use to cut the string  (starting value ,ending value )
console.log(fName.slice(0,3));  //sathya is the string 
console.log(fName.slice(1,2));

//split ana join operator
//spilt is used to split the string  joinis used to join a string

//split
console.log(fName.split('')); //op ['s','a','t','h','y','a']
console.log(fName.split(""));



//includes if use the letter it will display true if not it will display false
console.log(fName.includes('s'));



//trim use to remove the empty space
let str='Sathya      ';
console.log(str.trim());

