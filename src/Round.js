const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = deck;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    
    this.turns++;
    this.deck.cards.shift();

    if(turn.evaluateGuess()) {
      return turn.giveFeedback();
    }
   
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return Math.round((this.incorrectGuesses.length / this.turns) * 100);
  }
  
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;