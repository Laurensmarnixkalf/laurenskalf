// Created by Laurens to learn more about JS and jQuery!
// Some new code, for my personal website laurenskalf.nl

// Get all the bars 
var getAllBars = document.getElementById("skillsContainer").querySelectorAll(".progress-bar");  
// Turn Nodelist into array
var arrayOfBars = Array.prototype.slice.call(getAllBars);
// Create array containing values for bars
var valueArray = ['70%', '75%', '65%', '65%', '40%', '80%', '55%', '15%'];
// Function that fills all bars with right values
var barFiller = function () {
    for (i=0; i<arrayOfBars.length; i++) {
        arrayOfBars[i].setAttribute('style', `width: ${valueArray[i]}`);
    }
};
// Call function to fill bars
barFiller();