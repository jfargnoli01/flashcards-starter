const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = undefined;
  }

  start() {
    const cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
 
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;