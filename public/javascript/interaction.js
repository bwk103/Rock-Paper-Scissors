"use strict"

function Interaction(){

  function startGame(player1, player2){
    var game;
    var player1 = Player(player1)
    if (player2 !== ''){
      var player2 = Player(player2)
      return game = Game(player1, player2)
    }
    return game = Game(player1)
  }


  return {
    startGame: startGame
  }

}
