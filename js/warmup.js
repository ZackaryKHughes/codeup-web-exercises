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