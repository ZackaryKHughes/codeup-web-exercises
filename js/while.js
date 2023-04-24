"use script"

let i = 2
let n = 65536

while (i <= n){
    console.log(i);
    i *= 2;
}

console.log("-------------------------------------------------")

// This is how you get a random number between 50 and 100
var totalCones = Math.floor(Math.random() * 50) + 50;

// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;


do{
    let purchase = Math.floor(Math.random() * 5) + 1;
    console.log(`Customer bout ${purchase} cone(s).`);

    totalCones -= purchase;
    console.log(`We only have ${totalCones} left.`)

} while (totalCones > Math.floor(Math.random() * 5) + 1);{
    console.log(`I am so sorry. We are out of cones`)
}

// (function() {
//     let x = 1;
//     while(x <= 65537){
//         console.log(x);
//         x *= 2
//     }
//
//     let allCones = Math.floor(Math.random()) * 51) + 50;
//
//     do {
//         let conesToSell = Math.floor(Math.random()) * 5) + 1;
//         if (allCones >= conesToSell) {
//             allCones -= conesToSell;
//             console.log(`Customer is purchasing ${conesToSell}. Only ${allCones} left`);
//         }
//     } while (allCones !== 0)
// })();

