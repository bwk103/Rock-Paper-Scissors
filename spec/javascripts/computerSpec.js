"use strict";

describe('Computer', () => {
  const computer = Computer()

  describe('#getName', () => {
    it('returns Computer', () => {
      expect(computer.getName()).toBe('Computer')
    })
  })

  describe('#getWeapon', () => {
    it('returns the weapon selection', () => {
      var weapons = ['rock', 'paper', 'scissors', 'spock', 'lizard']
      expect(weapons).toContain(computer.getWeapon().getType())
    })
  })
})
