"use strict"

var oddNum = parseFloat(prompt("Please give me an odd number between 1 and 50"));


function userInput(){
           while (oddNum > 50 || oddNum % 2 === 0){
             oddNum = parseFloat(prompt("That is not an odd number. Please give me an odd number between 1 and 50."))
       }
    alert("Thank you")
}
userInput()

// (function()){
//
//     let numToSkip;
//
//     while(true){
//         numToSkip = parseInt(prompt("Give me an odd number between 1 and 50"));
//         if (numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0){
//             break;
//         }
//     }
// }


for (let i = 1; i < 51; i++) {
    // console.log(i)
    if (i === oddNum){
        console.log(oddNum + (" we will skip."))
        continue;
    }
    if (i % 2 !== 0) {
        console.log(i + " is an odd number.");
    }
}

// for (let i = 1; i < 50; i += 2){
//     if (i === numToSkip){
//         console.log(`Oops! Skipping ${numToSkip}`)
//         continue;
//     }
//     console.log(i);
// }

