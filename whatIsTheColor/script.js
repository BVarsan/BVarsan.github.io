window.onload = starterWindow;

// variáveis //
const quest = document.getElementById('textQuestColor');

const scoreLabel = document.getElementById('score');

const container = document.getElementById('container');

let btnToNextLevel = document.getElementById('next');

let randomicQuest = '';

let score = 0;

let bgColor = '';
let questColor = '';

let colors = [];

let randomicColor = [];
let allColor = [];
let color1 = '';
let color2 = '';
let color3 = '';
let color4 = '';
let color5 = '';

function saveColors() {
  for (let i = 0; i <= 14; i += 1) {
    randomicColor[i] = Math.floor(Math.random() * 255 + 1);
  }
  color1 = 'rgb(' + randomicColor[0] + ', ' + randomicColor[1] + ', ' + randomicColor[2] + ')';
  color2 = 'rgb(' + randomicColor[3] + ', ' + randomicColor[4] + ', ' + randomicColor[5] + ')';
  color3 = 'rgb(' + randomicColor[6] + ', ' + randomicColor[7] + ', ' + randomicColor[8] + ')';
  color4 = 'rgb(' + randomicColor[9] + ', ' + randomicColor[10] + ', ' + randomicColor[11] + ')';
  color5 = 'rgb(' + randomicColor[12] + ', ' + randomicColor[13] + ', ' + randomicColor[14] + ')';
}

// função para randomizar as cores //

function randomizeFirstColors() {
  allColor = [];
  saveColors();
  allColor.push(color1);
  allColor.push(color2);
  allColor.push(color3);
  allColor.push(color4);
  allColor.push(color5);
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1){
    document.querySelectorAll('.color')[i].style.backgroundColor = allColor[i];
  }
}

function whatIsTheColor() {
  randomicQuest = Math.floor(Math.random() * 4 + 1);
  questColor = document.querySelectorAll('.color')[randomicQuest];
  let cssObj = window.getComputedStyle(questColor, null);
  bgColor = cssObj.getPropertyValue('background-color');
  quest.innerText = bgColor;
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1){
    document.querySelectorAll('.color')[i].style.border = '1px solid black';
  }
}

function btnNextLevel() {
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    colors[i].removeEventListener('click', selectChoice);
  }
  btnToNextLevel.innerText = "Next Level";
  btnToNextLevel.style.display = "";
}

function btnRetry() {
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    colors[i].removeEventListener('click', selectChoice);
  }
  btnToNextLevel.innerText = "Play again";
  btnToNextLevel.style.display = "";
}

function selectChoice(colorSelected) {
  let cssObj1 = window.getComputedStyle(colorSelected.target, null);
  let bgColor1 = cssObj1.getPropertyValue('background-color');
  if (bgColor1 === bgColor) {
    score += 1;
    colorSelected.target.style.border = "solid 3px rgb(0, 255, 55)";
    colorSelected.target.className = colorSelected.target.className + " fa-blink"; 
    scoreLabel.innerText = `Score: ${score}`;
    btnNextLevel();
  } else {
    score = 0;
    colorSelected.target.style.border = "solid 3px red";
    questColor.style.border = "solid 3px rgb(0, 255, 55)";
    questColor.className = questColor.className + " fa-blink"; 
    btnRetry();
    scoreLabel.innerText = `Score: ${score}`;
  }
}

function toNextLevel() {
    randomizeFirstColors();
    whatIsTheColor();
    btnToNextLevel.style.display = "none";
    for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
      colors[i].addEventListener('click', selectChoice);
      colors[i].className = "color";
    }
}

btnToNextLevel.addEventListener('click', toNextLevel);

function clickableButton() {
  colors = [];
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    colors.push(document.querySelectorAll('.color')[i]);
    colors[i].id = 'color' + i;
  }
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    colors[i].addEventListener('click', selectChoice);
  }
}

// função para startar o site com as configs //

function starterWindow() {
  randomizeFirstColors();
  whatIsTheColor();
  clickableButton();
  scoreLabel.innerText = `Score: ${score}`;
  btnToNextLevel.style.display = "none";
}

