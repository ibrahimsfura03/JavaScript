/////////////////////////////////////////////////////////
///Strict mode
'use strict';


/*


let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive now :) ");

//////////////////////////////////////////////////////////
///Fundamental of Fictions

function logger(){
    console.log("Jonas");
}


/// calling / running / executing / invoking ---- the function
logger();

function fruitProcessor(apple, oranges){
    const juice = `Juice with ${apple} apples, and ${oranges} oranges.`;
    return juice;
}
///DRY dont repeat yourself
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const apppleOrangeJuice = fruitProcessor(34, 48);
console.log(apppleOrangeJuice);


///Function Practice
function birthYearCalc(birthYear, currentYear){
    const birthCalc = `You are ${currentYear - birthYear} years old!`;
    return birthCalc;
}

const myAge = birthYearCalc(2003, 2024);
console.log(myAge);

const someonesAge = birthYearCalc(1997, 2024);
console.log(someonesAge);

///Fucntions with EXPRATIONS
function birthYearCalc1(birthYear){
    const birthCalc = `You are ${2024 - birthYear}`;
    return birthCalc;
}

const myAge1 = birthYearCalc1(2003);
console.log(myAge1);

///Functions With EXPRATIONS this means we can keep inside of a variable
const birthYearCalc2 = function(birthYear){
    const birthCalc = `Your age is ${2024 - birthYear}`;
    return birthCalc;
}

const myAge2 = birthYearCalc2(2003);
console.log(myAge2);


///Arrow Fuction and my favourite :)
const birthYearCalc3 = birthYear => 2024 - birthYear;
const myAge3 = birthYearCalc3(2003);
console.log(myAge3);

//Years of retierment
const yearsOfRetierment = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retiermentYear = 65 - age;
    // return retiermentYear;
    return `${firstName} retires in ${retiermentYear} years`;
}
console.log(yearsOfRetierment(2003, 'Ibrahim'));
console.log(yearsOfRetierment(1993, 'mansur'));


///Calling Function inside a function
function cutPieces(fruits){
    return fruits * 4;
}

function fruitProcessor(apple, oranges){
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} poeces of apples and ${orangePieces} pieces of oranges`;
    return juice;
    
}
console.log(fruitProcessor(2, 3));


//Years of retierment

const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const yearsOfRetierment = function (birthYear, firstName){

    const age = calcAge(birthYear);
    const retiermentYear = 65 - age;

    // return retiermentYear;
    if(retiermentYear > 0){
        return `${firstName} retires in ${retiermentYear} years`;
    }else if(retiermentYear == 0){
        return `${firstName} will retire this year`;
    }else{
        return `${firstName} already retier ${retiermentYear} ago`;
    }
}

console.log(yearsOfRetierment(1959, 'Ibrahim'));


//////////////////////////////////////////////////////
///Arrays 

const freinds = ['Teryx', 'Zenithal', 'Flux'];
console.log(freinds);
console.log(freinds.length)
// console.log(freinds.pop())
// console.log(freinds.push())

console.log(freinds[2]);
console.log(freinds[0]);
console.log(freinds[2] = 'Vector');

//Aboutme
const firstName = 'Ibrahim';
const isMarried = false;
const aboutMe = [firstName, 'Suleiman', 2030 - 2008, isMarried, freinds];
console.log(aboutMe);


//Exercise 
const calcAge = birthYear => 2030 - birthYear;
const years = [1999, 2020, 1298, 1234, 183];
// console.log(years - calcAge); 

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[3]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);


///Array methods
const freinds = [];

//Add elemnts
freinds.push('Teryx');
freinds.push('Flux');
freinds.push('Meta');
freinds.push('Tesla');

console.log(freinds);

const name = 'Zenithal';
freinds.push(name)
freinds.unshift('Lambda');

console.log(freinds);

//Remove elemnts
freinds.pop();
const popped = freinds.pop();

freinds.shift();

console.log(freinds);
console.log(freinds.length)
console.log(popped);


console.log(freinds.indexOf('Flux'));
console.log(freinds.indexOf(0));

console.log(freinds.includes('Teryx'));
console.log(freinds.includes('Bauer'));

if(freinds.includes('Teryx')){
    console.log("You have a freind called Teryx");
}



*/
//////////////////////////////////////////////
///Objects 

const ibrahim = {
    firstName: 'Ibrahim',
    lastName: 'Suleiman',
    age: 2030 - 2001,
    job: 'Student',
    isMaried: false,
    friensds: ['teryx', 'zenithol', 'flux', 'webar']
};
console.log(ibrahim);
console.log(ibrahim.firstName);
console.log(ibrahim['lastNames']);

const nameKey = 'Name';
console.log(ibrahim['first' + nameKey]);
console.log(ibrahim['last' + nameKey]);

const intrestedIn = prompt("What did you wanna know about ibrahim? ");

console.log(intrestedIn(ibrahim.job));
