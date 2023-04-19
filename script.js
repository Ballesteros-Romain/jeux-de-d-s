// declaration des constantes et variables
let newGame = document.querySelector(".plus");
let countp1 = document.querySelector(".countp1");
let numberp1 = document.querySelector(".numberp1");
let countp2 = document.querySelector(".countp2");
let numberp2 = document.querySelector(".numberp2");
const name1 = document.querySelector("#joueur1");
const name2 = document.querySelector("#joueur2");
const dice = document.querySelector(".dice");
let rollDice = document.querySelector(".rollDice");
let hold = document.querySelector(".hold");
const joueur1 = document.querySelector("#joueur1");
const joueur2 = document.querySelector("#joueur2");
const joueurs = {
  joueur1: joueur1,
  joueur2: joueur2,
};
// function pour lancer une nouvelle partie
function Ngame() {
  countp1.textContent = 0;
  countp2.textContent = 0;
  numberp1.textContent = 0;
  numberp2.textContent = 0;
  joueur1.classList.add("selected");
  joueur2.classList.remove("selected");
  name1.style.color = "rgb(236, 118, 118)";
  name2.style.color = "black";
}

newGame.addEventListener("click", Ngame);
joueur1.addEventListener("click", selectPlayer);
joueur2.addEventListener("click", selectPlayer);
// function pour selectionner les joueurs
function selectPlayer(event) {
  if (event.target.id === "joueur1") {
    joueur1.classList.add("selected");
    joueur2.classList.remove("selected");
    name1.style.color = "rgb(236, 118, 118)";
    name2.style.color = "black";
  } else if (event.target.id === "joueur2") {
    joueur1.classList.remove("selected");
    joueur2.classList.add("selected");
    name1.style.color = "black";
    name2.style.color = "rgb(236, 118, 118)";
  }
}

// Function de lancer de dés et affichage du resultat
rollDice.addEventListener("click", roll);
function roll() {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  if (joueur1.classList.contains("selected")) {
    numberp1.textContent = diceValue;
    if (diceValue === 1) {
      joueur1.classList.remove("selected");
      joueur2.classList.add("selected");
      name1.style.color = "black";
      name2.style.color = "rgb(236, 118, 118)";
    }
  } else if (joueur2.classList.contains("selected")) {
    numberp2.textContent = diceValue;
    if (diceValue === 1) {
      joueur1.classList.add("selected");
      joueur2.classList.remove("selected");
      name1.style.color = "rgb(236, 118, 118)";
      name2.style.color = "black";
    }
  }
  if (diceValue === 1) {
    alert("Vous avez fait 1 : Game Over");
  }
}
// Function de stockage du resultat
function stock() {
  let countHold;
  let diceValue;

  if (joueur1.classList.contains("selected")) {
    diceValue = parseInt(numberp1.textContent);
    countHold = parseInt(countp1.textContent);
    countHold += diceValue;
    countp1.textContent = countHold;
    joueur1.classList.remove("selected");
    joueur2.classList.add("selected");
    name1.style.color = "black";
    name2.style.color = "rgb(236, 118, 118)";
  } else if (joueur2.classList.contains("selected")) {
    diceValue = parseInt(numberp2.textContent);
    countHold = parseInt(countp2.textContent);
    countHold += diceValue;
    countp2.textContent = countHold;
    joueur1.classList.add("selected");
    joueur2.classList.remove("selected");
    name1.style.color = "rgb(236, 118, 118)";
    name2.style.color = "black";
  }
  if (countHold === 100) {
    alert("Bravo vous avez gagné");
  }
}

hold.addEventListener("click", stock);
