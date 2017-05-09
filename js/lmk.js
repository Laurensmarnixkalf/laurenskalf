
//  The following statements will remove the classes topics and topics2
function removeText() {
    var removeElement = document.getElementById('topics');
    var containerElement = removeElement.parentNode;
    containerElement.removeChild(removeElement);
    var removeElement = document.getElementById('topics2');
    var containerElement = removeElement.parentNode;
    containerElement.removeChild(removeElement);
    console.log ("removeText wordt wel uitgevoerd");
}
//  This will add a cool new title to the page!
var jumboTitle = document.getElementById("headline");
var findTitle = document.getElementsByTagName("h4");

function createTitle(title) {
  jumboTitle.innerHTML = title; //add code that will chante title;
  // console.log (jumboTitle.textContent);
}

function createText(text) {
  var newElement = document.createElement('p');
  newElement.innerHTML = text;
  var position = document.getElementById('allTopics');
  position.appendChild(newElement);
}

function createBackButton() {
  var btn = document.createElement("BUTTON");           // Create a <button> element
  var t = document.createTextNode("< Back");              // Create a text node
  btn.appendChild(t);                                   // Append the text to <button>
  btn.style.cssText = 'border: none;\
  background: none; color: #3498db; padding: 20px 20px 20px;'                       // Styling of back button
  btn.onclick = function (){location.reload();};        // Go back to previous page on click
  var position = document.getElementById('allTopics');  // Get location of div
  position.appendChild(btn);                            // Add button to allTopics

}


var titleMap = {
  psychology:"Psychology is cool",
  health:"Health is important",
  sports:"Sports are awesome",
  tech:"Tech is the shit",
  design:"Design is for losers",
  dev:"Development is hard..."
}

// <br /> this is just to get a line break in the text on the page
var textMap = {
  psychology:"<b>Psychology is cool</b><br />\
  Because here is an interesting text about psychology.",
  health:"Health is important",
  sports:"Sports are awesome",
  tech:"Tech is the shit",
  design:"Design is for losers",
  dev:"Development is hard..."
}


for (i = 0; i < findTitle.length; i++) {
        findTitle[i].addEventListener("click", function (event){ // Pass event into function
                  console.log("my id: " + event.target.id); // Fetch the target id of the event
                  var myTitle = titleMap[event.target.id]; // New variable that stores the text found in titleMap
                  var myText = textMap[event.target.id]; // New variable that stores the text found in textMap
                  removeText(); //function to remove the current content of 'allTopics'
                  createTitle(myTitle); //function to create new jumboTitle, text in myTitle is passed
                  createBackButton(); //function to create a back button
                  createText(myText);  //function to create new content where 'all Topics' was
                  }
        );
}

console.log("Proof of concept")
console.log("doet ie t nou?")
console.log("github testing")
