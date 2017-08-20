// Created by Laurens to learn more about JS and jQuery!
// Some new code, using jQuery for my personal website laurenskalf.nl

$(document).ready(function() {
    $('#omnes').hide();
    $('#omnes').fadeIn(800);
});

const movingTitles = function () {
    $('#psychology').slideUp(400).show(200);
    console.log('hoi laurens het werkt');
};
