"use strict"


function showMultiplicationTable(num){
    for (let i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }

}
showMultiplicationTable(9)

// (function() {
//     function showMultiplcationTable(num){
//         for(let i = 1; i <= 10; i++) {
//             console.log(`${num} + ${i} = ${num * i}`)
//         }
//
//         showMultiplcationTable(7)
//         showMultiplcationTable(99)
//
// })();


// for (let)
function random(min, max) {
    return Math.floor(Math.random() * (200 - 20) + 20);
}
// console.log(random(20, 200));



for (let i = 1; i < 11; i++){
    let randomNum = random()
    if(randomNum % 2 === 0){
        console.log(randomNum + " is even.")
    } else console.log(randomNum + " is odd.")
}

// for (let i = 1; i < 11; i++){
//     let randomNum = Math.floor(Math.random() * (200 - 2 + 1) + 20);
//     if(randomNum % 2 === 0){
//         console.log(randomNum + " is even.")
//     } else console.log(randomNum + " is odd.")
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ same as above
// } // console.log(randomNum % 2 === 0 ? `${randomNum} is even` : ` ${randomNum} is odd`);



let string = "";

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

console.log("-------------------------------------------------------");


for (let i = 1; i < 10; i++){
    let output = "";
    for (let j = 1; j <= i; j++){
        output += i;
    }
    console.log(output);
}

// let output = "";
//  for (let i = 1; i < 10; i++){
//     for (let j = 1; j <= i; j++){
//         output += "\n";
//     }
// }
// console.log(output);

// for (let i =1; i < 10; i++){
//     console.log(i.toString().repeat(i))
// }

// for (let i = 1; i < 10; i++) {
//     var num = i.toString();
//     console.log(num.repeat(i));
// }

for (let i = 100; i > 4; i -= 5){
    console.log(i);
}

// for (let i = 100; i > 0; i -= 5){
//     console.log(i);
// }






