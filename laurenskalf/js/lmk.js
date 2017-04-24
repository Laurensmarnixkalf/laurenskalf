

var jumboTitle = document.getElementById("headline");

var findTitle = document.getElementsByTagName("h4");

for (i = 0; i < findTitle.length; i++) {
  findTitle[i].addEventListener("click", changeTitle);
}

function changeTitle() {
  jumboTitle.innerHTML = this.innerHTML;

  console.log (jumboTitle.textContent);
}

console.log("Proof of concept")
console.log("doet ie t nou?")

/*
.getElementById("banner")
.getElementById('topics')*/
