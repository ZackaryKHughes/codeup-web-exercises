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



