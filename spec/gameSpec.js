describe('Game', () => {

  const james = jasmine.createSpyObj('james', ['name'])
  const mia = jasmine.createSpyObj('mia', ['name'])
  const game = new Game(james, mia)

  describe('defaults', () => {
    it('initializes with two players', () => {
      expect(game._player1).not.toBe(null);
      expect(game._player2).not.toBe(null);
    })
    it('player 1 has the first turn', () => {
      expect(game._currentTurn).toBe(james)
    })
  });

  describe('#switchTurn', () => {
    it('switches the currentTurn', () => {
      game.switchTurn()
      expect(game._currentTurn).toBe(mia)
    })
  })
})
