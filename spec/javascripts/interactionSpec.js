describe("Interactions", () => {
  var interaction;

  beforeEach(()=> {
    interaction = Interaction();
    player = {
      getName : function(){ return 'James' },
      getWeapon : function(){},
      setWeapon : function(){}
    },
    completeGame = {
      isComplete : function(){ return true },
      switchCurrentPlayer : function(){},
      setResult : function(){}
    },
    incompleteGame = {
      isComplete : function(){ return false },
      switchCurrentPlayer : function(){}
    },
    viewer = {
      addMessage : function(){}
    }
  })

  describe("#startGame", () => {
    describe('with one player', ()=> {
      it('creates instance of Player when a player name is provided', ()=> {
        var playerSpy = spyOn(window, 'Player')
        interaction.startGame('James', '')
        expect(playerSpy).toHaveBeenCalledWith('James')
      })
      it('creates instance of Game with one player', ()=> {
        var gameSpy = spyOn(window, 'Game')
        interaction.startGame('James', '')
        expect(gameSpy).toHaveBeenCalled()
        expect(gameSpy.calls.mostRecent().args.length).toBe(1)
      })
    })
    it('creates two instances of Player when two players names are passed in', ()=> {
      var playersSpy = spyOn(window, 'Player')
      interaction.startGame('James', 'Brian')
      expect(playersSpy.calls.count()).toBe(2)
    })
    it('creates instance of Game with two players', ()=> {
      var gameSpy = spyOn(window, 'Game')
      interaction.startGame('James', 'Brian')
      expect(gameSpy).toHaveBeenCalled()
      expect(gameSpy.calls.mostRecent().args.length).toBe(2)
    })
  })

  describe("#takeTurn", () => {
    it('creates an instance of Weapon when choice passed in', ()=> {
      var weaponSpy = spyOn(window, 'Weapon')
      interaction.takeTurn(player, 'rock')
      expect(weaponSpy).toHaveBeenCalledWith('rock')
    })
    it('sets the current players choice', ()=> {
      var playerSpy = spyOn(player, 'setWeapon')
      interaction.takeTurn(player, 'rock')
      expect(playerSpy).toHaveBeenCalled()
    })
  })

  describe("#isGameOver", () => {
    it('checks whether the current game is over', ()=> {
      var gameSpy = spyOn(completeGame, 'isComplete')
      interaction.isGameOver(completeGame)
      expect(gameSpy).toHaveBeenCalled()
    })
    it('switches the current player if the game is not over', () => {
      var gameSpy = spyOn(incompleteGame, 'switchCurrentPlayer')
      interaction.isGameOver(incompleteGame)
      expect(gameSpy).toHaveBeenCalled()
    })
  })

  describe('#endGame', ()=> {
    it('calls #setResult on Game', ()=> {
      var gameSpy = spyOn(completeGame, 'setResult')
      interaction.endGame(completeGame, viewer)
      expect(gameSpy).toHaveBeenCalled()
    })
    it('calls #addMessage on the results viewer', ()=> {
      var viewerSpy = spyOn(viewer, 'addMessage')
      interaction.endGame(completeGame, viewer)
      expect(viewerSpy).toHaveBeenCalled()
    })
  })
})
