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
    console.log(e.target);
    if (!e.target.classList.contains("show")) {
      e.target.classList.add("show");
      descriptionHeader.classList.toggle("fadeIn");
      if (e.target.classList.contains("fuji")) {
        descriptionHeader.innerHTML = "Discover picturesque scenery";
      } else if (e.target.classList.contains("garden")) {
        descriptionHeader.innerHTML = "Take your time in peaceful gardens";
      } else if (e.target.classList.contains("street")) {
        descriptionHeader.innerHTML = "Walk urban streets";
      } else if (e.target.classList.contains("tori")) {
        descriptionHeader.innerHTML = "Visit shinto shrines";
      }
    }
  }
});

upButton.addEventListener("click", function () {
  let turn = rotation.style.transform;
  let clockwise = turn + "rotate(90deg)";
  rotation.style.transform = clockwise;

  let centerTurn = center.style.transform;
  let counterclockwise = centerTurn + "rotate(-90deg)";
  center.style.transform = counterclockwise;
});

downButton.addEventListener("click", function () {
  let turn = rotation.style.transform;
  let clockwise = turn + "rotate(-90deg)";
  rotation.style.transform = clockwise;

  let centerTurn = center.style.transform;
  let counterclockwise = centerTurn + "rotate(90deg)";
  center.style.transform = counterclockwise;
});
