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
    getWeapon: function(){
      return paper
    }
  };
  const alan = {
    getName: function(){
      return 'Alan'
    },
    getWeapon: function(){
      return rock
    }
  };
  const bondo = {
    getName: function(){
      return 'Bondo'
    },
    getWeapon: function(){
      return rock
    }
  }
  const james = {
    getName: function(){
      return 'James'
    },
    getWeapon: function(){
      return undefined;
    }
  };

  const game = Game(alan, mia)

  describe('defaults', () => {
    it('initializes with two players', () => {
      expect(game.players.length).toBe(2)
    })
  });

  describe('#switchCurrentPlayer', () => {
    it('switches the currentPlayer', () => {
      var firstPlayer = game.getCurrentPlayer()
      game.switchCurrentPlayer()
      expect(game.getCurrentPlayer()).not.toBe(firstPlayer)
    })
  })

  describe('#setResult', () => {
    it('checks whether there has been a tie', () => {
      var tiedGame = Game(alan, bondo)
      tiedGame.setResult()
      expect(tiedGame.getTieStatus()).toBe(true)
    })

    it('calls the #isBetter function on currentPlayer weapon', () => {
      spyOn(alan, 'getWeapon').and.callThrough()
      game.setResult()
      expect(alan.getWeapon).toHaveBeenCalled()
    })

    // it('determines the winning player', () => {
    //   game.setResult()
    //   expect(game.getResult()).toBe("Mia's paper wraps Alan's rock");
    // })
  })

  // describe('#getResult', () => {
  //   it('returns the winning player', () => {
  //     game.setResult()
  //     var message = "Mia's paper wraps Alan's rock"
  //     expect(game.getResult()).toBe(message)
  //   })
  //
  //   it('returns tie if the match is a tie', () => {
  //     var tiedGame = Game(alan, bondo)
  //     tiedGame.setResult()
  //     expect(tiedGame.getResult()).toBe("It's a tie")
  //   })
  // })

  describe('#isComplete', () => {
    it('returns true when the game is complete', () => {
      var game = Game(alan, bondo)
      expect(game.isComplete()).toBe(true)
    })

    it('calls the #getWeapon function on each player', () => {
      var game = Game(alan, bondo)
      spyOn(alan, 'getWeapon').and.callThrough()
      spyOn(bondo, 'getWeapon').and.callThrough()
      game.isComplete()
      expect(alan.getWeapon).toHaveBeenCalled()
      expect(bondo.getWeapon).toHaveBeenCalled()
    })

    it('returns false when the game is incomplete', () => {
      var game = Game(alan, james)
      expect(game.isComplete()).toBe(false)
    })
  })
})
