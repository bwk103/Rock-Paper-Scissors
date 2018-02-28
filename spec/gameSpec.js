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
    }
  };
  const mia = {
    name: function(){
      return 'Mia'
    },
    _weapon: paper
  };
  const james = {
    name: function(){
      return 'James'
    },
    _weapon: rock
  };
  const game = new Game(james, mia)

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
      var tiedGame = new Game(james, james)
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
      expect(game.getResult()).toBe(mia)
    })

    it('returns tie if the match is a tie', () => {
      var tiedGame = new Game(james, james)
      tiedGame.setResult()
      expect(tiedGame.getResult()).toBe('tie')
    })
  })
})
