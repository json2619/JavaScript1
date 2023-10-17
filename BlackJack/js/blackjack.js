"use strict";

const suits = ["Corazon", "Trebol", "Diamante", "Picas"];
const values = [
	"A",
	"K",
	"Q",
	"J",
	"10",
	"9",
	"8",
	"7",
	"6",
	"5",
	"4",
	"3",
	"2",
];

const game = {
	dealerCards: [],
	playerCards: [],
	dealerScore: 0,
	playerScore: 0,
	deck: [],
};

function createDeck() {
	for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
		for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
			let card = {
				suit: suits[suitIdx],
				value: values[valueIdx],
			};
			game.deck.push(card);
		}
	}
}

function shuffleDeck() {
	for (let i = 0; i < game.deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * game.deck.length);
		let tmp = game.deck[swapIdx];
		game.deck[swapIdx] = game.deck[i];
		game.deck[i] = tmp;
	}
}

function initialTurn() {
	game.playerCards.length = 0;
	game.dealerCards.length = 0;
	for (let i = 0; i < 2; i++) {
		game.playerCards.push(game.deck.shift());
		game.dealerCards.push(game.deck.shift());
	}
	game.dealerScore = getScore(game.dealerCards);
}

function getCardNumericValue(card) {
	switch (card.value) {
		case "A":
			return 11;
		case "K":
		case "Q":
		case "J":
			return 10;
		default:
			return +card.value;
	}
}

function getScore(card) {
	let score = 0;
	let hasAce = 0;
	for (let i = 0; i < card.length; i++) {
		score += getCardNumericValue(card[i]);
		if (card[i].value === "A") {
			hasAce++;
		}
	}
	while (hasAce > 0 && score > 21) {
		score -= 10;
		hasAce--;
	}

	return score;
}

function getNextCard(card) {
	card.push(game.deck.shift());
}

function playDealer() {
	game.dealerScore = getScore(game.dealerCards);
	while (
		game.playerScore <= 21 &&
		game.dealerScore < game.playerScore &&
		game.dealerScore < 21
	) {
		getNextCard(game.dealerCards);
		game.dealerScore = getScore(game.dealerCards);
	}
}

function playGame() {
	createDeck();
	shuffleDeck();
	initialTurn();
	console.log(game.playerCards);
	console.log(game.dealerCards);

	while (!(getScore(game.playerCards) > 21)) {
		getNextCard(game.playerCards);
		console.log(getScore(game.playerCards));
	}
	console.log(game.playerCards);

	game.playerScore = 18;
	playDealer();
	console.log("-------");
	console.log(game.dealerCards);
	console.log(game.dealerScore);
}

playGame();
