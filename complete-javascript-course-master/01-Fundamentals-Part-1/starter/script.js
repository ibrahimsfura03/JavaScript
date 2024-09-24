/* let js = "amazig";
if(js === "amazing") alert("Javascript Is FUN!");
else{alert("it is not FUN!")}
console.log(10+23+32+20-80)

// ////////////////////////////////////////
////THREE TYPES OF VARIABLES

let jsIsFun = false;
console.log(jsIsFun)

console.log(typeof jsIsFun);
console.log(typeof "jonas");
console.log(typeof 23.42332);
console.log(typeof null);
console.log(typeof n);

jsIsFun = 'Hell Nooooo!'
console.log(jsIsFun);


const Job = 'jonas';
console.log(Job)

lastName = "AdamuFura";
console.log(lastName)

/////////////////////////////////////
/////BASIC OPRATIONS 


let now = 40;

let belindaAge = 20;
let edwinAge = 25;

console.log(belindaAge > edwinAge);
console.log(edwinAge >= belindaAge);

belindaAge += 20;

console.log(belindaAge)

edwinAge *= 2;

console.log(edwinAge);

console.log(now - belindaAge < now + edwinAge);

/////////////////////////////////////////

const now = 2037;
const ibAge = 1992;
const aliAge = 2302;
console.log(now - ibAge > now - aliAge);

let x, y;
x = y = 20 - 15 + 5;
console.log("My X is -> " + x, " My Y is -> " + y)

////AVERAGE

const john =  20;
const sarah =  30;
const mansur =  40;

const sum = john + sarah + mansur;
const avv = sum/2;

console.log(avv);



/////////////////////////////////////////
////Template string 

const firstName = "Ibrahim";
const job = "programmer";
const yearsOfExperience = "17";

console.log("I'm " + firstName + ", And i'am a " + job + "with " + yearsOfExperience + " Years of experience")

console.log(`I'm ${firstName}, And i'am a ${job} with ${yearsOfExperience} Years of experience`)

console.log('This a string \n\ With \n\ Multiple lines \n\ Break')

/////////////////////////////////////////DRIVERS LICENS
////Decisions IF ELSE THEN IFELSE

 const ageAllowed = 18;
 const sarahsAge = 18;

 if(ageAllowed >= sarahsAge){
    console.log(`You are ${ageAllowed - sarahsAge} years from getting drivers Lincens`);
 }else{
    console.log(`Welcome onboard!`)
 }

 /////Centuary

 const birthYear = 2001;

 let centuary;
 if(birthYear <= 200){
    centuary = 20;
 }else{
    centuary = 21;
 }
 console.log(centuary)


///////////////////////////////////////
///Type conversion

const birthYear = '2000';
console.log(Number(birthYear) + 18);
console.log(birthYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23)

///Type coercion
console.log('Iam ' + 26 + ' years old'); //type coeecion
console.log('Iam 26 years old'); //manually


///Guess The Output 

let n = '1' + 1;
n = n - 1;
console.log(n);


/////////////////////////////////////////
///Truthy And Falsy

// tHE 5 falsy we have 0, '', undefined, null NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({}));


let money = 0;
if(money){
    console.log("Don't spend it all :) ");
}else{
    console.log("Get a job...");
}

let height;
if(height){
    console.log("YAY! height is defined :)");
}else{
    console.log("Ugh hight is UNDEFINED :(");
}


/////////////////////////////////////
///Equality Operators

// const age = '18';

// if(age === 18){
//     console.log("Youa ar eligible :) 'Strict' ")
// }

// if(age == 18){
//     console.log("Youa ar eligible :) 'Loose' ")
// }

const favouriteNum = prompt("Enter your FavNum: ");
console.log(favouriteNum);
// Number(favouriteNum);

// console.log(typeof favouriteNum);
// console.log(`Your favourite Number is --> ${favouriteNum}`);

if(favouriteNum === 18){
    console.log("It is YAY!");
}else if(favouriteNum === 7){
    console.log("7 is cool too :)");
}else{
    console.log("neither 18 nor 7 wwas printed");
}

if(favouriteNum !== 9){
    console.log("Why not nine 9 for GOD'S sake");
}



//////////////////////////////////////////
///Boolean Oprations 

const hasDriversLinces = true;
const hasGodvISION = true;

console.log(hasDriversLinces && hasGodvISION);
console.log(hasDriversLinces || hasGodvISION);
console.log(hasDriversLinces || !hasGodvISION);
console.log(!hasDriversLinces && hasGodvISION);

const shouldDrive = hasDriversLinces && hasGodvISION;

if(shouldDrive){
    console.log("YAY! You can drive now :) ");
}else{
    console.log("Sorry you cant drive :) ");
}
////////////// Fun Exefcise
let isRaining = false;
let isSunny = true;
let isNormalDay = true;

if(isRaining){
    console.log("Carry umbrella");
}else if(isSunny){
    console.log("Drink lots of water");
}else{
    console.log("Have a nice day!");
}


/////////////////////////////////////////////////////////////////////////
////Switch Statements

let day = 'monday';

switch(day){
    case 'monday':
        console.log("Go to Lexington early in the morning");
        console.log("Make sure to greate Mr. Ladan");
    break;
    case 'tuesday':
        console.log("Intentionally delay 1H before going out");
    break;
    case 'wednessday':
        console.log("Check up on your Online Shadows Accounts");
    break;
        case 'thursday':
        console.log("Take thursday Fast and make lots of Du'as");
    break;
    case 'friday':
        console.log("Call all Familys and Freinds to greate them");
    break;
    default:
        console.log("Make sure to pray the daily '5' on time");
}

console.log("This Lower one is done using if statments");

///Exercise Using Conditonal statments
    if(day == 'monday'){
        console.log("Go to Lexington early in the morning");
        console.log("Make sure to greate Mr. Ladan");
    }else if(day == 'tuesday'){
        console.log("Intentionally delay 1H before going out");
    }else if(day == 'wednessday'){
        console.log("Check up on your Online Shadows Accounts");
    }else if(day == 'thursday'){
        console.log("Take thursday Fast and make lots of Du'as");
    }else if(day == 'friday'){
        console.log("Call all Familys and Freinds to greate them");
    }else{
        console.log("Make sure to pray the daily '5' on time");
    }


////////////////////////////////////////////////////////////////////
///Statements And Expressions

//This is an expression it usually ends with semi colon ';'
2+2
true, false, !true;
2993;

//This is a Statements
const me = 'why not me!';
if(me === 'why not me!'){
    console.log("Yeah thats me :) ");
}



*/
/////////////////////////////////////////////////////////////////////////////
///Conditionsal Tanary operator

const age = 3;
// age >= 18 ? console.log("I want to drive the car") :
            // console.log("I wanna sit at the passengers sit");


const drive = age >= 18 ? 'Drive' : 'Sit nd Watch';
console.log(drive);

// let drive2;
// if(age >= 18){
//     drive2 = 'why wouldt i drive?';
// }else{
//     drive2 = 'why wouldt i sit and watch?';
// }


console.log(`i want to ${age >= 18 ? 'Drive' : 'Sit and Watch'}`);
