"use strict";

(function(){
    // Declaring an array.
    let emptyArr = [];
    console.log(Array.isArray(emptyArr));

    let cheeses = ["Cheddar", "String", "Wensleydale"]; // This array contains 3 elements.

    let falseyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
    //.......However, this can lead to some unintended results with looping/iterative structure.

    console.log(cheeses[1]) // this will print the second element in our cheese array.
    console.log(cheeses.indexOf("Cheddar")); // This will return and print 0.
    console.log(cheeses[1].indexOf("Brie")) // Returns -1
    console.log(cheeses.indexOf("White Cheddar")); // This will return and print -1.
    console.log(cheeses[cheeses.length - 1]);

    console.log(cheeses.length)

    // Let's create a loop to print all of our cheeses to the console!

    for (let i = 0; i < cheeses.length; i++) {
        console.log(cheeses[i]);
    } // Print the cheeses string in order of array

    for (let i = cheeses.length - 1; i >= 0; i--) {
        console.log(cheeses[i]);
    } // Print the cheeses string backwards order of array

    //For Each version
    cheeses.forEach(function(cheese) {
        console.log(cheese);
    });

    cheeses.forEach(function(cheese, index) {
        console.log(`${index}: ${cheese} `);
    });

    cheeses.forEach(function(cheese, index, array) {
        console.log(`${index}: ${cheese}`);
        console.log(array);
    });
})();