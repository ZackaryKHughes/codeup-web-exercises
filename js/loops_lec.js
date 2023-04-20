"use strict";

// function areWeThereYet() {
//     //While loops: Runs while our condition is true.
//     let areWeThereYet = false
//
//     while(areWeThereYet === false){
//         areWeThereYet = confirm("Are we there yet?")
// }
//
//     alert("Thanks!");

function areWeThereYetNow() {
    let keepLooping = true;
    while (keepLooping) {
        keepLooping = !confirm("Are we there yet, now?")
    }
}

areWeThereYetNow();

// while(true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now all of us are singing just because.....")
// }


let companyHasEmail = true;

while (companyHasEmail === false) {
    companyHasEmail = confirm("Could we have your email?");
}

do {
    companyHasEmail = confirm("Please, could we have your email?");
} while (companyHasEmail === false);

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body


for (let i = 1; i <= 10; i++) {
    console.log(`This loop has run ${i} time(s). `)
}

for (let i = 10; i > 0; i -=2) {
    console.log(i);
}

while (true) {
    if (confirm("Are we there yet???"))
        break;
}

alert("WOOHOO! Disney World!!!!");

for (let i = 10; i > 0; i--) {
    if(i % 2 !== 0) {
        console.log("oops: odd number!");
        continue;
    }
    console.log(i);
}
// })();

let count = 1;

while (count < 10) {
    console.log(count);
    count++
}

let sum = 5;

do {
    console.log(sum);
    sum += 5;
} while (sum < 56);

for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++){
        console.log(`${i} + ${j} = ${i + j}`);
    }
}
