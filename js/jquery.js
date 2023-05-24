"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});


let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;
let lives = $(".lives");
let mario = $(".mario");
let mushroom = $(".mushroom");

let keyHandler = function (event) {

    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    // Update how much of the pattern is complete
    current++;

    // If complete, alert and reset
    if (pattern.length === current) {
        current = 0;
        window.alert('You found the secret code.....');
        window.alert('What is happening to me.....')
        mushroom.animate({
            "margin-right" : "+=125em",
        }, 1500);
        lives.html("30")
        mario.animate({fontSize: '2em'}, "slow");
    }
};

// Listen for keydown events
document.addEventListener('keyup', keyHandler, false);



