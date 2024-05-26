//JSON  javascript object notation is a light weight data interchange formate thats easy forn humans to read and write and easy fot machines to uned satnd and generate
//the key should  be rappedinsed the  double qoutoes (" name":"SN")
//extension should be in .json

const person={
    name:'SN',
    age:19,
    email:'sn@gmail.com',
    hobbies:["Reading books",'Swimming','playing games'],
    address:{
        city:'Coimbatore',idk:true
    }
}

//JSON.stringify() is  a method used to convent JS Code to JSON Code  
//it is used for transmiting data over a network or for storing data in a format that can be easily read and pasrsed by other system

const jsonString=JSON.stringify(person);console.log(jsonString)

//Parsing in JavaScript typically refers to converting a JSON string into a JavaScript object. This is achieved using the JSON.parse() method. When you parse a JSON string, it is transformed into a JavaScript object, allowing you to interact with the data using standard JavaScript syntax.