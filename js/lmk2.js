// Created by Laurens to learn more about JS and jQuery!
// Some new code, using jQuery for my personal website laurenskalf.nl

// $(document).ready(function() {
//     $('#introductionContainer').hide().delay(500).fadeIn(600);
//     $('#interestsContainer').hide().delay(1200).fadeIn(800);
//     $('#workContainer').hide().delay(2000).fadeIn(800);
//     $('#skillsContainer').hide().delay(2000).fadeIn(500);
//     $('#studyContainer').hide().delay(2000).fadeIn(500);
//     $('#voetje').hide().delay(2000).fadeIn(500);


// });


// Get all the bars 
var getAllBars = document.getElementById("skillsContainer").querySelectorAll(".progress-bar");  
// Turn Nodelist into array
var arrayOfBars = Array.prototype.slice.call(getAllBars);
// Create array containing values for bars
var valueArray = ['70%', '75%', '65%', '65%', '40%', '80%', '65%', '15%'];
// Function that fills all bars with right values
var barFiller = function () {
    for (i=0; i<arrayOfBars.length; i++) {
        arrayOfBars[i].setAttribute('style', `width: ${valueArray[i]}`);
    }
};
// Call function to fill bars
barFiller();