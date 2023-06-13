var boxes = document.querySelectorAll(".box");
var statusText = document.querySelector(".status");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");
var playAgain = document.querySelector(".playAgain");
var boxCount = 6;
var color = getRandomColor(boxCount);
var pickedColor = color[Math.floor(Math.random() * color.length)];
var rgbSpan = document.querySelector("#rgbSpan");
statusText.innerHTML = "Let's Play!!";

easyBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "#1199aa";
  rgbSpan.innerHTML = pickedColor;
  statusText.innerHTML = "Pick a Color";
  this.style.background = "#1199aa";
  this.style.color = "#fff";
  hardBtn.style.background = "#fff";
  hardBtn.style.color = "#1199aa";
  boxCount = 3;
  color = getRandomColor(boxCount);
  pickedColor = color[Math.floor(Math.random() * color.length)];
  for (var i = 0; i < boxes.length; i++) {
    if (color[i]) {
      boxes[i].style.background = color[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "#1199aa";
  rgbSpan.innerHTML = pickedColor;
  statusText.innerHTML = "Pick a Color";
  this.style.background = "#1199aa";
  this.style.color = "#fff";
  easyBtn.style.background = "#fff";
  easyBtn.style.color = "#1199aa";
  boxCount = 6;
  color = getRandomColor(boxCount);
  pickedColor = color[Math.floor(Math.random() * color.length)];
  for (var i = 0; i < boxes.length; i++) {
    if (color[i]) {
      boxes[i].style.background = color[i];
      boxes[i].style.display = "block";
    }
  }
});

playAgain.addEventListener("click", function () {
  rgbSpan.innerHTML = pickedColor;
  color = getRandomColor(boxCount);
  pickedColor = color[Math.floor(Math.random() * color.length)];
  for (var i = 0; i < boxes.length; i++) {
    if (color[i]) {
      boxes[i].style.background = color[i];
    }
  }
});

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    var selectedColor = this.style.background;
    if (selectedColor == pickedColor) {
      win();
    } else {
      lose(this);
    }
  });
}

function win() {
  statusText.innerHTML = "Correct!!";
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = pickedColor;
  }
}

function lose(color) {
  color.style.background = "gray";
  statusText.innerHTML = "Try Again";
}

function getRandomColor(num) {
  var arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(createRandomColor());
  }
  return arr;
}

function createRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
