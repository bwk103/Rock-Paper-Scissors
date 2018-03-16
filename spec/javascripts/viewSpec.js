describe('View', ()=> {
  var view = View()
  var Tom  = {
    getName: function() { return 'Tom' },
    getWeapon: function() { return rock }
  }
  var Jack  = {
    getName: function() { return 'Jack' },
    getWeapon: function() { return paper }
  }
  var rock = {
    getType: function(){ return 'rock' },
    isBetter: function(){ return false },
    getVerb: function(){ return 'something' }
  }
  var paper = {
    getType: function(){ return 'paper' },
    isBetter: function(){ return true },
    getVerb: function(){ return 'wraps' }
  }
  var tiedGame = {
    getTieStatus : function(){ return true },
    getResult : function(){}
  }
  var winGame = {
    getTieStatus : function() { return false },
    getResult : function(){ return { 'winner': Jack, 'loser': Tom } }
  }

  describe('#addResult', () => {
    describe('when a game is tied', () => {
      it("adds 'It/'s a tie' to the html", () => {
        expect(view.addResult(tiedGame)).toBe("It's a tie!")
      })
    })
    describe('when a player wins a game', ()=> {
      it("returns a result message", ()=> {
        expect(view.addResult(winGame)).toBe("Jack's paper wraps Tom's rock")
      })
    }, )
  })
})
