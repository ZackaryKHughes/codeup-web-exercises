(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planets = planetsString.split('|')
    planetsArray = Array.of(planets)

    console.log(planetsArray);

    console.log("--------------------------------------------------");

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    let planetsStringWithBreaks = planetsArray.join("<br>");
    console.log(planetsStringWithBreaks);
    document.getElementById("put-here").innerHTML = planetsStringWithBreaks

    let planetsList = "<ul><li>" + planetsArray.join("<li></li>") + "</li></ul>"
    document.getElementById("put-here").innerHTML += planetsList;
})();