"use strict";

// Write a JS function that returns the number 7.

function seven(){
    return 7;
}

console.log(seven());

console.log("_______________________________________")

function findFactors(x){
    if (typeof x === "number" && !isNaN(x)){
        let result = [];
       for (let i = 1; i <= x; i++){
           if(x % i === 0){
               result.push(i)
           }
       }
        return result;
    } else {
        return false
    }
}

console.log(findFactors(16));;
console.log(findFactors(6));;
console.log(findFactors(0));;
console.log(findFactors(true));; // returns false;
console.log(findFactors("13"));; // returns false;
console.log(findFactors([54, 72, 144]));; // returns false;
console.log(findFactors({value: 64}));; // returns false;
console.log(findFactors());; // returns false;

console.log("____________________________________")


function countEs(x) {
    if (typeof x === "string") {
        let count = 0;
        let E = x.toUpperCase();
        for (let i = 0; i <+ x.length; i++) {
            if(E.charAt(i) === "E") {
                count++;
            }
        }
        return count
    } else {
        return false
    }
}

console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;




console.log("-----------------------------------------")



function hasEs(str){
    return countEs(str) > 0;
}

console.log(hasEs("Ease")); // returns 2;
console.log(hasEs("teleconference")); // returns 5;
console.log(hasEs("TOM")); // returns 0;
console.log(hasEs(true)); // returns false;
console.log(hasEs(['e'])); // returns false;
console.log(hasEs()); // returns false;


console.log("-----------------------------------------")


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz()

console.log("-----------------------------------------")


let square = 2

do {
    console.log(square);
    square *= square;
} while (square < 1000001);


console.log("-----------------------------------------")

function addEmUp(x) {
    let total = 0;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
    } return total;
}

console.log(addEmUp([2,6,19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44,10,7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
console.log(addEmUp([-13, -92, -3500])) // returns -3605



console.log("-----------------------------------------")

// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.


function explainString(x) {
    return{
        string:x,
        numberOfEs: countEs(x),
        isEvenLength: x.length % 2 === 0
    }
}

console.log(explainString("cheese")) // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
console.log(explainString("dog")) // returns {string: "dog", numberOfEs: 0, isEvenLength: false}


console.log("-----------------------------------------")



// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(x) {
    let bucket = [];
    x.forEach(function(y){
        bucket.push(y.name);
    });
return bucket;
}

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];


console.log("-----------------------------------------")


const getTallest = function(x) {
    let tallest = {heightInMM: 0};
    x.forEach(function(y) {
        if (y.heightInMM > tallest.heightInMM){
            tallest = y;
        }
    });
    return tallest;
};


console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}

console.log("-----------------------------------------")

// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

function singleFurColor(x) {
    let single = [];
    x.forEach(function(y) {
      if (y.fur.length === 1) {
          single.push(y);
      }
    });
    return single;
}

// function singleFurColor(arr) {
//     let single = [];
//     for (let i = 0; i > 0; i++) {
//         arr.fur.length
//     }
// }

console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];