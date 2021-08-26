const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const card1 = new Card(1, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
const card2 = new Card(2, 'What is the best ice cream flavor?', ['vanilla', 'oreo', 'chocolate'], 'oreo');
const card3 = new Card(3, 'What sound does a dog make?', ['meow', 'quack', 'woof'], 'woof');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store the deck', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should start with 0 turns', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  });

  it('should start with an empty incorrect guesses array', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  

  it('should count the number of turns', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('giraffe');
    round.takeTurn('vanilla');
    expect(round.turns).to.equal(2);
  });

  it('should store id of incorrect guesses', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('elephant');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should know if guess is correct', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('giraffe')).to.equal('correct!');
  });

  it('should know if guess is incorrect', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('frog')).to.equal('incorrect!');
  });

  it('should calculate percentage correct', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('giraffe');
    round.takeTurn('vanilla');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should print end round message', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('giraffe');
    round.takeTurn('vanilla');
    round.takeTurn('woof');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });
});