"use strict";

describe('Weapon', () => {
  const paper = Weapon('paper')
  const rock = Weapon('rock')
  const scissors = Weapon('scissors')
  const lizard = Weapon('lizard')
  const spock = Weapon('spock')

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
    describe('rock', () => {
      it('crushes scissors', () => {
        expect(rock.isBetter(scissors)).toBe(true);
      })
      it('crushes lizard', () => {
        expect(rock.isBetter(lizard)).toBe(true);
      })
      it('is wrapped by paper', () => {
        expect(rock.isBetter(paper)).toBe(false);
      })
      it('is vaporised by spock', () => {
        expect(rock.isBetter(spock)).toBe(false);
      })
      it('ties with rock', () => {
        expect(rock.isBetter(rock)).toBe(false);
      })
    })
    describe('paper', () => {
      it('covers rock', () => {
        expect(paper.isBetter(rock)).toBe(true);
      })
      it('disproves spock', () => {
        expect(paper.isBetter(spock)).toBe(true);
      })
      it('is cut by scissors', () => {
        expect(paper.isBetter(scissors)).toBe(false);
      })
      it('is eaten by lizard', () => {
        expect(paper.isBetter(lizard)).toBe(false);
      })
      it('ties with paper', () => {
        expect(paper.isBetter(paper)).toBe(false);
      })
    })
    describe('scissors', () => {
      it('cuts paper', () => {
        expect(scissors.isBetter(paper)).toBe(true);
      })
      it('decapitates lizard', () => {
        expect(scissors.isBetter(lizard)).toBe(true);
      })
      it('are crushed by rock', () => {
        expect(scissors.isBetter(rock)).toBe(false);
      })
      it('are smashed by spock', () => {
        expect(scissors.isBetter(spock)).toBe(false);
      })
      it('ties with scissors', () => {
        expect(scissors.isBetter(scissors)).toBe(false);
      })
    })
    describe('lizard', () => {
      it('poisons spock', () => {
        expect(lizard.isBetter(spock)).toBe(true);
      })
      it('eats paper', () => {
        expect(lizard.isBetter(paper)).toBe(true);
      })
      it('is crushed by rock', () => {
        expect(lizard.isBetter(rock)).toBe(false);
      })
      it('is decapitated by scissors', () => {
        expect(lizard.isBetter(scissors)).toBe(false);
      })
      it('ties with lizard', () => {
        expect(lizard.isBetter(lizard)).toBe(false);
      })
    })
    describe('spock', () =>{
      it('smashes scissors', () => {
        expect(spock.isBetter(scissors)).toBe(true);
      })
      it('vapourises rock', () => {
        expect(spock.isBetter(rock)).toBe(true);
      })
      it('is disproved by paper', () => {
        expect(spock.isBetter(paper)).toBe(false);
      })
      it('is poisoned by lizard', () => {
        expect(spock.isBetter(lizard)).toBe(false);
      })
      it('ties with spock', () => {
        expect(spock.isBetter(spock)).toBe(false);
      })
    })
  })

  describe('#getVerb', () => {
    describe('returns the correct verb given the two weapons', () => {
      it('rock crushes scissors', () => {
        expect(rock.getVerb(scissors)).toBe('crushes')
      })
      it('rock crushes lizard', () => {
        expect(rock.getVerb(lizard)).toBe('crushes')
      })
      it('paper covers rock', () => {
        expect(paper.getVerb(rock)).toBe('covers')
      })
      it('paper disproves spock', () => {
        expect(paper.getVerb(spock)).toBe('disproves')
      })
      it('scissors cuts paper', () => {
        expect(scissors.getVerb(paper)).toBe('cuts')
      })
      it('scissors decapitates lizard', () => {
        expect(scissors.getVerb(lizard)).toBe('decapitates')
      })
      it('lizard poisons spock', () => {
        expect(lizard.getVerb(spock)).toBe('poisons')
      })
      it('lizard eats paper', () => {
        expect(lizard.getVerb(paper)).toBe('eats')
      })
      it('spock smashes scissors', () => {
        expect(spock.getVerb(scissors)).toBe('smashes')
      })
      it('spock vapourises rock', () => {
        expect(spock.getVerb(rock)).toBe('vapourises')
      })
    })
  })

  describe('throws errors', () => {
    it('if an invalid weapon selection is made', () => {
      expect(function() {Weapon('gun')} ).toThrowError("That's not a valid weapon!")
    })
  })
})
