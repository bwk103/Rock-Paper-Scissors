"use strict";

$(document).ready(function(){
  var game;
  var results = new ResultsViewer($("#result-message"));

  $('#play').on('click', function(e){
    e.preventDefault()
    startGame()
    $('.player-details').addClass('hide')
  })

  $('button.weapon').on('click', function(e){
    e.preventDefault();
    var weapon = new Weapon($(this).attr('data-weapon'))
    game.getCurrentPlayer().setWeapon(weapon)
    isGameOver()
  })

  $('#replay').on('click', function(){
    startGame()
    results.clearMessage()
    $('#replay').toggleClass('hide')
  })

  function startGame(){
    var player1 = new Player($('#player1').val())
    if (isPlayer2()){
      var player2 = new Player($('#player2').val())
      game = new Game(player1, player2)
    } else {
      game = new Game(player1)
    }
  }

  function takeTurn(){
    var weapon = makeWeapon($(this).attr('data-weapon'))
    game.getCurrentPlayer.setWeapon(weapon)
    isGameOver()
  }

  function endGame(){
    game.setResult()
    results.addMessage(game.getResult())
    $('#replay').toggleClass('hide')
  }

  function isGameOver(){
    if (game.isComplete()){
      endGame()
    }
    else {
      game.switchCurrentPlayer();
    }
  }
})

function isPlayer2(){
  return $('#player2').val() !== ''
}
