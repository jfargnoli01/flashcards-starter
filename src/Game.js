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
    //create new card to create deck
    //need to give deck to round

    //creates Cards
    const cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    // const card1 = new Card(1, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    // const card2 = new Card(2, 'What is the best ice cream flavor?', ['vanilla', 'oreo', 'chocolate'], 'oreo');
    // const card3 = new Card(3, 'What sound does a dog make?', ['meow', 'quack', 'woof'], 'woof');
    //puts Cards in a Deck
    const deck = new Deck(cards);
    // creates new Round using the Deck
    const round = new Round(deck);
    this.currentRound = round;
    // util.main(round);
    //invokes printMessage  to display in CLI
    this.printMessage(deck, this.currentRound);
    //invokes printQuestion to kick off our helper functions 
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;