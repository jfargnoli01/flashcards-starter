const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

const card1 = new Card(1, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
const card2 = new Card(2, 'What is the best ice cream flavor?', ['vanilla', 'oreo', 'chocolate'], 'oreo');
const card3 = new Card(3, 'What sound does a dog make?', ['meow', 'quack', 'woof'], 'woof');

describe('Deck', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should store cards', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards.length).to.equal(3);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards in deck', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});