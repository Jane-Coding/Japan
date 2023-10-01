const pictures = document.getElementsByClassName("picture");
const accordion = document.getElementById("accordion");

const descriptionHeader = document.getElementById("description-header");
const descriptionText = document.getElementById("description-text");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const rotation = document.getElementById("rotation");

const center = document.getElementById("center");

accordion.addEventListener("click", function (e) {
  if (!e.target.classList.contains("accordion")) {
    for (let pic of pictures) {
      pic.classList.contains("show") ? pic.classList.remove("show") : false;
    }
    if (!e.target.classList.contains("show")) {
      e.target.classList.add("show");
      descriptionHeader.classList.toggle("fadeIn");
      if (e.target.classList.contains("fuji")) {
        descriptionHeader.innerHTML = "Discover picturesque scenery";
      } else if (e.target.classList.contains("garden")) {
        descriptionHeader.innerHTML = "Relax in peaceful gardens";
      } else if (e.target.classList.contains("street")) {
        descriptionHeader.innerHTML = "Walk urban streets";
      } else if (e.target.classList.contains("tori")) {
        descriptionHeader.innerHTML = "Visit shinto shrines";
      }
    }
  }
});

let degrees = 0;

upButton.addEventListener("click", function () {
  degrees += 90;
  let clockwise = `rotate(${degrees}deg)`;
  rotation.style.transform = clockwise;
});

downButton.addEventListener("click", function () {
  degrees -= 90;
  let counterclockwise = `rotate(${degrees}deg)`;
  rotation.style.transform = counterclockwise;
});
