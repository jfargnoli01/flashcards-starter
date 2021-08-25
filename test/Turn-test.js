const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('giraffe');
    expect(turn.guess).to.equal('giraffe');
  });

  it('shoud store a card', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('giraffe', card);
    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should return a guess', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('giraffe', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return a card', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('giraffe', card);
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should evaluate the guess', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('giraffe', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should tell you guess is correct', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('giraffe', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should tell you guess is incorrect', function() {
    const card = new Card(2, 'What is the tallest mammal?', ['giraffe', 'elephant', 'frog'], 'giraffe');
    const turn = new Turn('frog', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});