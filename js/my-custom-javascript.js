"use strict";

$(function () {
  let close = document.getElementsByClassName("closebtn");
  let i;

  // Loop through all close buttons
  for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function () {
      // Get the parent of <span class="closebtn"> (<div class="alert">)
      let div = this.parentElement;

      // Set the opacity of div to 0 (transparent)
      div.style.opacity = "0";

      // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
      setTimeout(function () {
        div.style.display = "none";
      }, 600);
    };
    // INSERT JAVASCRIPT CODE SAMPLE HERE
  }
});
