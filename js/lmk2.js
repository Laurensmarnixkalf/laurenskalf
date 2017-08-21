// Created by Laurens to learn more about JS and jQuery!
// Some new code, using jQuery for my personal website laurenskalf.nl

$(document).ready(function() {
    $('#laurens').hide().delay(500).fadeIn(600);
    $('#allTopics').hide().delay(1200).fadeIn(800);
    $('#voetje').hide().delay(1600).fadeIn(800);
    // $('#laurens').fadeIn(1000);
    // // $('#banner').fadeIn(2500).delay(800);
    // $('#allTopics').fadeIn(2500);
    // $('#voetje').fadeIn(3000);
});

const movingTitles = function () {
    $('#psychology').slideUp(400).show(200);
    console.log('hoi laurens het werkt');
};

var hello = function() {
console.log('hoi lau');
};

hello ();
