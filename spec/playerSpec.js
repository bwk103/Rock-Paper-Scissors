describe('Player', () => {

  const player = new Player('Bill')

  describe('#getName', () => {
    it('returns the name of the player', ()=> {
      expect(player.getName()).toBe('Bill')
    })
  });

  describe('#setWeapon', () => {
    it("sets the player's weapon", ()=> {
      player.setWeapon('Gun')
      expect(player.weapon).toBe('Gun')
    })
  })

  describe('#getWeapon', () => {
    it("returns the player's weapon", () => {
      player.setWeapon('Gun')
      expect(player.getWeapon()).toBe('Gun')
    })
  })
});
