"use strict";

describe('Game', () => {

  const rock = {
    getType: function(){
      return 'rock'
    },
    isBetter: function(){
      return false
    }
  };
  const paper = {
    getType: function(){
      return 'paper'
    },
    isBetter: function(){
      return true
    },
    getVerb: function(){
      return 'wraps'
    }
  };
  const mia = {
    getName: function(){
      return 'Mia'
    },
    _weapon: paper
  };
  const alan = {
    getName: function(){
      return 'Alan'
    },
    _weapon: rock
  };
  const james = {
    getName: function(){
      return 'Alan'
    }
  };

  const game = new Game(alan, mia)

  describe('defaults', () => {
    it('initializes with two players', () => {
      expect(game._player1).not.toBe(null);
      expect(game._player2).not.toBe(null);
    })
  });

  describe('#switchTurn', () => {
    it('switches the currentTurn', () => {
      var firstPlayer = game._currentTurn
      game.switchTurn()
      expect(game._currentTurn).not.toBe(firstPlayer)
    })
  })

  describe('#setResult', () => {
    it('checks whether there has been a tie', () => {
      var tiedGame = new Game(alan, alan)
      tiedGame.setResult()
      expect(tiedGame._isTie).toBe(true)
    })

    it('determines the winning player', () => {
      game.setResult()
      expect(game._winner).toBe(mia);
    })
  })

  describe('#getResult', () => {
    it('returns the winning player', () => {
      game.setResult()
      var message = "Mia's paper wraps Alan's rock"
      expect(game.getResult()).toBe(message)
    })

    it('returns tie if the match is a tie', () => {
      var tiedGame = new Game(alan, alan)
      tiedGame.setResult()
      expect(tiedGame.getResult()).toBe("It's a tie")
    })
  })

  describe('#isComplete', () => {
    it('returns true when the game is complete', () => {
      var game = new Game(alan, alan)
      game.setResult()
      expect(game.isComplete()).toBe(true)
    })
    it('returns false when the game is incomplete', () => {
      var game = new Game(alan, james)
      expect(game.isComplete()).toBe(false)
    })
  })
})
