"use strict";


console.log("Hello from external JavaScript");


alert("Welcome to my Website!");

// the following line will show the OK/CANCEL confirm dialog
//var confirmed = confirm('Are you sure you want to do XYZ?');
//console.log(confirmed); // will be either true or false
//
//console.log("Hello Again");

// Question 1
var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);


alert(userInput + " is my favorite color as well!!!");


alert("I hear you got some movies for you kids to watch and wanna know how much the rental will be.")

alert("I think I can help you with that.")

//Question 2
function rentalPrice() {
    let lm = prompt("How many days for Little Mermaid?");
    let bb = prompt("How man days for Brother Bear?");
    let hercules = prompt("How many days for Hercules?");
    let day = 3
    let price = (Number(lm) + Number(bb) + Number(hercules)) * day;
    return price;

}

alert("Your rental total is " + "$" + rentalPrice() +".00");

//Quetion 3

