const pictures = document.getElementsByClassName("picture");
const accordion = document.getElementById("accordion");

const descriptionHeader = document.getElementById("description-header");
const descriptionText = document.getElementById("description-text");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const rotation = document.getElementById("rotation");

const textChange = document.getElementById("text-change");

const emoji = document.getElementById("emoji");
const sakura = document.getElementById("sakura");
const origami = document.getElementById("origami");
const sudoku = document.getElementById("sudoku");
const words = [emoji, sudoku, origami, sakura];

accordion.addEventListener("click", function (e) {
  if (!e.target.classList.contains("accordion")) {
    for (let pic of pictures) {
      pic.classList.contains("show") ? pic.classList.remove("show") : false;
    }
    if (!e.target.classList.contains("show")) {
      e.target.classList.add("show");
      if (e.target.classList.contains("fuji")) {
        descriptionText.innerHTML = "Discover picturesque scenery";
      } else if (e.target.classList.contains("garden")) {
        descriptionText.innerHTML = "Relax in peaceful gardens";
      } else if (e.target.classList.contains("street")) {
        descriptionText.innerHTML = "Walk urban streets";
      } else if (e.target.classList.contains("tori")) {
        descriptionText.innerHTML = "Visit shinto shrines";
      }
    }
  }
});

let degrees = 0;
let i = 0;

upButton.addEventListener("click", function () {
  degrees += 90;
  let clockwise = `rotate(${degrees}deg)`;
  rotation.style.transform = clockwise;

  words[i].classList.toggle("invisible");
  ++i;
  if (i >= 4) {
    i = 0;
  }
  words[i].classList.toggle("invisible");
});

downButton.addEventListener("click", function () {
  degrees -= 90;
  let counterclockwise = `rotate(${degrees}deg)`;
  rotation.style.transform = counterclockwise;

  words[i].classList.toggle("invisible");
  --i;
  if (i <= -1) {
    i = 3;
  }
  words[i].classList.toggle("invisible");
});
