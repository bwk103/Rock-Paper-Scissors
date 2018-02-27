describe('Weapon', () => {
  const paper = new Weapon('paper')
  const rock = new Weapon('rock')
  const scissors = new Weapon('scissors')

  describe('defaults', () => {
    it('contains the rules of engagement', () => {
      expect(paper.rules).not.toBe(null);
    })
  })

  describe('#getType', () => {
    it('returns the type of weapon selected', () => {
      expect(paper.getType()).toBe('paper')
      expect(rock.getType()).toBe('rock')
      expect(scissors.getType()).toBe('scissors')
    })
  })

  describe('#isBetter', () => {
    it('confirms that rock beats scissors', () => {
      expect(rock.isBetter(scissors)).toBe(true);
    })

    it('confirms that paper beats rock', () => {
      expect(paper.isBetter(rock)).toBe(true);
    })
  
    it('confirms that scissors beats paper', () => {
      expect(scissors.isBetter(paper)).toBe(true);
    })
  })
})
