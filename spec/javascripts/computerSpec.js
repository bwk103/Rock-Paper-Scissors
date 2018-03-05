"use strict";

describe('Computer', () => {
  const computer = new Computer()
  const rock = {};

  describe('#getName', () => {
    it('returns Computer', () => {
      expect(computer.getName()).toBe('Computer')
    })
  })

  describe('#getWeapon', () => {
    it('returns the weapon selection', () => {
      computer._weapon = rock
      expect(computer.getWeapon()).toBe(rock)
    })
  })
})
