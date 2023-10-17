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
	for (let i = 0; i < 2; i++) {
		game.playerCards.push(game.deck.shift());
		game.dealerCards.push(game.deck.shift());
	}
}

function getCardNumericValue(card) {
	switch (card.value) {
		case "A":
			return 11;
		case ("K", "Q", "J"):
			return 10;
		default:
			return +card.value;
	}
}

function getScore(cards) {
	let score = 0;
	let hasAce = 0;
	for (let i = 0; i < cards.length; i++) {
		score += getCardNumericValue(cards[i]);
		if (cards[i].value === "A") {
			hasAce++;
		}
	}
	while (hasAce > 0 && score > 21) {
		score -= 10;
		hasAce--;
	}
}

function playGame() {
	createDeck();
	shuffleDeck();
	initialTurn();
	console.log(game.deck);
	console.log(game.playerCards);
	console.log(game.dealerCards);
}

playGame();
