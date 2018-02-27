describe('Game', () => {

  const james = jasmine.createSpyObj('james', ['name'])
  const mia = jasmine.createSpyObj('mia', ['name'])
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
})
