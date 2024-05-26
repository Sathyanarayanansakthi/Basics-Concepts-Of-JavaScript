var place=''  //conditon try to change first ,second,and third to see different output

switch(place){
    case'first':
    console.log('Gold')
    break;

    case'second':
    console.log('Silver')
    break;

    case 'third':
    console.log('Bronze')
    break;

    default :
    console.log('No metal for you')
}

//switch statements  statement  to select one of many code block to executed
let x=0;    
let bulb;
switch (x) {
    case 0:
     bulb="off";
     console.log(bulb);
     break;
    case 1:
        text="on";
        console.log(bulb);
        break;
     default:
        bulb="no value found";
        console.log(bulb);
}


let day="monday"; // change the day to  ur wish in thisn line
switch (day){
    case "monday":
        console.log("today in monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    case "wednesday":
        console.log("today is wednesday");
        break;
    case "thus":
        console.log('today is thus');
        break;
    case "fri":
        console.log('today is thus')
        break;
    case "sat":
        console.log('today is thus')
        break;    
    case "sun":
        console.log('today is thus')
        break;
    default:    // if u  a new word it will return the default value
        console.log('dont know what day it is')    
        
}