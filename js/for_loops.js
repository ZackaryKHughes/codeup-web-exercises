"use strict"


function showMultiplicationTable(num){
    for (let i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }

}
showMultiplicationTable(9)
// console.log("7 x 1 = 7")
// console.log(num + " x " + i + " = " + (num * i))
// for (let i = 0; i < 11; i++);
// console.log(showMultiplicationTable(7))

// for (let)
function random(min, max) {
    return Math.floor(Math.random() * (200 - 20) + 20);
}
// console.log(random(20, 200));



for (let i = 1; i < 11; i++){
    var randomNum = random()
    if(randomNum % 2 === 0){
        console.log(randomNum + " is even.")
    } else console.log(randomNum + " is odd.")
}

let string = "";

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

console.log("-------------------------------------------------------");

for (let i = 1; i < 10; i++) {
    var num = i.toString();
    console.log(num.repeat(i));
}

for (let i = 100; i > 4; i -= 5){
    console.log(i);
}






