// Created by Laurens to learn more about JS and jQuery!
// Some new code, for my personal website laurenskalf.nl

// JS to trigger actions on scroll event
let barsFilled = false;
const barsContainer = document.getElementById("skillsContainer");
// Nodelist of all images
const allOpacityImages = document.querySelectorAll(".imageOpacity");
// Array of all images
const allOpacityImagesArray = Array.prototype.slice.call(allOpacityImages);
// Bottom of barsContainer
const bottomOfbarsContainer = barsContainer.offsetTop + barsContainer.offsetHeight;

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

function checkScrollAndDoStuff() {
    // Scrollspy to check position of 'bottom of window'
    let scrollSpy = window.scrollY + window.innerHeight;
    if (scrollSpy > bottomOfbarsContainer && !barsFilled) {
        barFiller();
        barsFilled = true;
    } 
    allOpacityImagesArray.forEach(opacityImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - opacityImage.height / 2;
      // bottom of the image
      const imageBottom = opacityImage.offsetTop + opacityImage.height;
      const isHalfShown = slideInAt > opacityImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        opacityImage.setAttribute('style', `opacity: 1;`);
      } 
    });
}

window.addEventListener('scroll', debounce(checkScrollAndDoStuff));

// JS to fill the bars gradually
// Get all the bars 
var getAllBars = document.getElementById("skillsContainer").querySelectorAll(".progress-bar");  
// Turn Nodelist into array
var arrayOfBars = Array.prototype.slice.call(getAllBars);
// Create array containing values for bars
var valueArray = ['80%', '75%', '65%', '60%', '40%', '80%', '55%', '15%'];
// Function that fills all bars with right values
var barFiller = function () {
    for (i=0; i<arrayOfBars.length; i++) {
        arrayOfBars[i].setAttribute('style', `width: ${valueArray[i]}`);
    }
};



