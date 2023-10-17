// DOM variables
const dealerDOM = {
	cards: document.getElementById("cards-dealer"),
	score: document.getElementById("score-dealer"),
	result: document.getElementById("result-dealer"),
};
const playerDOM = {
	cards: document.getElementById("cards-player"),
	score: document.getElementById("score-player"),
	result: document.getElementById("result-player"),
};
const playerButtons = document.getElementById("player-buttons");
const newGameButton = document.getElementById("new-game-button");
const stayButton = document.getElementById("stay-button");
const hitButton = document.getElementById("hit-button");

function cleanGame() {
	dealerDOM.cards.innerHTML = "";
	dealerDOM.score.innerHTML = "";
	dealerDOM.result.innerHTML = "";
	playerDOM.cards.innerHTML = "";
	playerDOM.score.innerHTML = "";
	playerDOM.result.innerHTML = "";
}

newGameButton.addEventListener("click", function () {
	playGame();
	cleanGame();
	showGameButtons();
	showStatus();
});

function showGameButtons() {
	newGameButton.classList.add("d-none");
	playerButtons.classList.remove("d-none");
}

function hideGameButtons() {
	newGameButton.classList.remove("d-none");
	playerButtons.classList.add("d-none");
}
