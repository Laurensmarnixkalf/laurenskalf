// Created by Laurens to learn more about JS and jQuery!
// Some new code, for my personal website laurenskalf.nl

// JS to trigger barFiller on scroll event
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const barsContainer = document.getElementById("skillsContainer");

  function checkSlide() {
      // Scrollspy to check position of 'bottom of window'
      let scrollSpy = window.scrollY + window.innerHeight;
      // Bottom of barsContainer
      const bottomOfbarsContainer = barsContainer.offsetTop + barsContainer.offsetHeight;
      if (scrollSpy > bottomOfbarsContainer) {
        barFiller();
      };
  }

  window.addEventListener('scroll', debounce(checkSlide));

// JS to fill the bars gradually
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

