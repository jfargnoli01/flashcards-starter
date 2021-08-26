const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start round as undefined', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(undefined);
  });

  it('should be able to start the game', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round)
  });
});

