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
      pic.classList.contains("js-show")
        ? pic.classList.remove("js-show")
        : false;
    }
    if (!e.target.classList.contains("js-show")) {
      e.target.classList.add("js-show");
    }
    switch (e.target.dataset.picture) {
      case "fuji":
        let phrase1 = "Discover picturesque scenery.";
        fade(phrase1);
        break;
      case "garden":
        let phrase2 = "Relax in peaceful gardens.";
        fade(phrase2);
        break;
      case "street":
        let phrase3 = "Walk urban streets.";
        fade(phrase3);
        break;
      case "tori":
        let phrase4 = "Visit shinto shrines.";
        fade(phrase4);
        break;
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

function fade(text) {
  descriptionText.style.animation = "fadeOut 1s";
  setTimeout(function () {
    descriptionText.style.animation = "fadeIn 2s";
    descriptionText.innerHTML = text;
  }, 500);
}