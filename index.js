 //Comment
//  console.log('Hello world');

//--------------Variables----------------

// let name = 'Anu';
// console.log(name);

// //cammol notation - best practice -> fistName
// let firstName,  surName;

// //best practice
// // let firstName;
// // let surName;


//--------------Constants----------------
// const interstRate = 0.3;
// interstRate = 1;

// console.log(interstRate); //error cannot reassing a constant


//--------------Primitives----------------
// let name = 'Anu'; //String
// let age = 30;   //Number
// let isApproved = false; //Boolean
// let firstName = undefined;
// let selectedColor = null;


//--------------Dynamic Language----------------

//--------------Object----------------
// // let name = 'Anu';
// // let age = 24;

// let person = {
//     //Object litro
//     name: 'Anu',
//     age: 24
// }; 

// //access to variables in object 
// //Dot Notation
// person.name = 'Shehaan';

// //Bracket Notation
// person['name'] = 'Mary'

// console.log(person.name);


//--------------Array----------------

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;

// console.log(selectedColors);
// console.log(selectedColors.length);
// console.log(selectedColors[1]);


//--------------Functions----------------

//Performing a task
function greet(name, lastName){
    //Need a logic
    console.log('Hello '+ name + ' ' + lastName + '!')
    //No needto add semicolon end of statement in function
}

greet('Nirupama', 'Dissanayake');
greet('Sanaka');
greet('Sehaan');


//Calculating a value
function square(number){
    return number * number
}

//Method 01
let number = square(4);
console.log(number);

//Method 02
console.log(square(5)); //2 function calls 1)square 2)console.log



