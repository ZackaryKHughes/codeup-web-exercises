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

//Question 3

alert("I think you can afford the price of this given how much you worked this week. But lets just make sure of that.")

function totalPayout() {
    let google = prompt("How many hours did you work for Google this week?");
    let google2 = prompt("What was the hourly rate?");
    let amazon = prompt("How many hours did you work for Amazon this week?");
    let amazon2 = prompt("What was the hourly rate?");
    let facebook = prompt("How many hours did you work for Facebook this week?");
    let facebook2 = prompt("What was the hourly rate?");
    let totalPayment = ((google*google2) + (amazon*amazon2) + (facebook*facebook2));
    return totalPayment;
}

alert("You got paid " + "$" + totalPayout() +".00");


//Question 4

alert("With all that extra money you could enroll into school!");

alert("Lets see if we have any conflicts that may arise for your enrollment.");

function enrollment() {
    let full = confirm("Is the class full? 'OK' for yes 'Cancel' for no");
    let schedule = confirm("Does the class schedule conflict with your current schedule in anyway? 'OK' for yes 'Cancel' for no")
    if (full === false && schedule === false) {
        alert("You may attend the class");
    } else {
        alert("You may not attend the class");
    }
}
enrollment();

//Question 5

alert("Need help buying books for class?")

alert("Lets see if can get you a discount.")

function discount() {
    let premium = confirm(
        'Are you a Premium member? "Ok" for "Yes", "Cancel" for "No"'
    );
    let itemsPurchases = prompt("How many items did you purchase?");
    let valid = confirm('Is the offer still valid? "Ok" for "Yes", "Cancel" for "No"')
    if (premium === true || Number(itemsPurchases) > 2 && valid) {
        alert("Please enjoy your discount");
    } else {
        alert(
            "Please become a member or purchase more than 2 items to enjoy the discount"
        );
    }
}

discount();
