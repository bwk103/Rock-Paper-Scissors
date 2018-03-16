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

  function takeTurn(player, choice){
    var weapon = Weapon(choice)
    player.setWeapon(weapon)
  }

  function isGameOver(game, viewer){
    if (game.isComplete()){
      endGame(game, viewer)
    } else {
      game.switchCurrentPlayer()
    }
  }

  function endGame(game, viewer){
    game.setResult()
    viewer.addMessage(game.getResult())
    $('#replay').toggleClass('hide')
  }

  return {
    startGame: startGame,
    takeTurn: takeTurn,
    isGameOver: isGameOver,
    endGame: endGame
  }
}
