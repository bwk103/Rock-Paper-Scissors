describe("Interactions", () => {
  var interaction;

  beforeEach(()=> {
    interaction = Interaction();
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
    it('creates two instances when two players names are passed in', ()=> {
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
})
