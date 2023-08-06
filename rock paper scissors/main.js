let startbutton = document.querySelector(".startbutton");
let buttons = document.querySelectorAll(".imgbutton1");
let buttons2 = document.querySelectorAll(".imgbutton2");
let playerbox = document.querySelector(".playerbox");
let cpubox = document.querySelector(".cpubox");
let section = document.querySelector("section");
let title = document.querySelector(".title");
let imgss = document.querySelectorAll(".player");
let imgscpu = document.querySelectorAll(".cpu");
let barray = [];
let originalCpuImages = [];
let originalPlayerImages = [];
buttons.forEach((button) => {
  originalPlayerImages.push(button.innerHTML);
});

buttons2.forEach((button) => {
  originalCpuImages.push(button.innerHTML);
});

console.log(buttons2);
function play() {
  buttons.forEach(function (element) {
    element.addEventListener("click", game);
  });
}

function first() {
  console.log("dddd ");
  playerbox.style.display = "none";
  cpubox.style.display = "none";
  title.classList.add("titleshadow");
  let shadowbox = document.createElement("div");
  let imgforshadowplayerbox = document.createElement("img");
  imgforshadowplayerbox.src = "img/rock-paper-scissors.png";
  imgforshadowplayerbox.classList.add("rock-paper-scissors");
  shadowbox.classList.add("shadowbox");
  shadowbox.appendChild(imgforshadowplayerbox);
  section.appendChild(shadowbox);
  cpubox.style.display = "none";
}

function secend(element) {
  console.log(element.target);
  section.removeChild(section.children[2]);
  playerbox.style.display = "flex";
  cpubox.style.display = "flex";
  let showchoosed1 = document.createElement("div");
  showchoosed1.classList.add("showchoosed1");
  showchoosed1.appendChild(element.target);
  playerbox.innerHTML = "";
  playerbox.appendChild(showchoosed1);
  let showchoosed2 = document.createElement("div");
  showchoosed2.classList.add("showchoosed1");
  let arrcpu = Array.from(imgscpu);
  showchoosed2.appendChild(arrcpu[Math.floor(Math.random() * arrcpu.length)]);
  cpubox.innerHTML = "";
  cpubox.appendChild(showchoosed2);

  setTimeout(resetGame, 2000);
}

function resetGame() {
  let shadowbox = document.querySelector(".shadowbox");
  if (shadowbox) {
    shadowbox.remove();
  }

  let showchoosed1 = document.querySelector(".showchoosed1");
  if (showchoosed1) {
    showchoosed1.remove();
  }
  let showchoosed2 = document.querySelector(".showchoosed1");
  if (showchoosed2) {
    showchoosed2.remove();
  }
  playerbox.style.display = "flex";
  cpubox.style.display = "flex";

  buttons2.forEach(function (button) {
    cpubox.appendChild(button);
  });
  buttons.forEach(function (button) {
    playerbox.appendChild(button);
  });

  let playerButtons = document.querySelectorAll(".imgbutton1");
  playerButtons.forEach((button, index) => {
    button.innerHTML = originalPlayerImages[index];
  });

  // Restore original images for the CPU's buttons
  let cpuButtons = document.querySelectorAll(".imgbutton2");
  cpuButtons.forEach((button, index) => {
    button.innerHTML = originalCpuImages[index];
  });

  title.classList.remove("titleshadow");
}
function game(element) {
  first();

  setTimeout(function () {
    secend(element);
  }, 3000);
}
play();
