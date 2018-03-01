"use strict";

$(document).ready(function(){
  var game;

  $('#play').on('click', function(e){
    e.preventDefault()
    startGame()
  })

  $('button.weapon').on('click', function(e){
    e.preventDefault();
    takeTurn()
  })

  $('#replay').on('click', function(){
    startGame()
    $('#result-message').text('')
    $('#replay').toggleClass('hide')
  })

  function startGame(){
    var player1 = getPlayer($('#player1').val())
    if (isPlayer2()){
      var player2 = getPlayer($('#player2').val())
      game = new Game(player1, player2)
      console.log(game)
    } else {
      game = new Game(player1)
    }
  }

  function takeTrun(){
    var weapon = makeWeapon($(this).attr('data-weapon'))
    game._currentTurn.setWeapon(weapon)
    isGameOver()
  }

  function endGame(){
    game.setResult()
    $('#result-message').text(game.getResult())
      $('#replay').toggleClass('hide')
  }

  function isGameOver(){
    if (game._player1._weapon !== undefined && game._player2._weapon !== undefined){
      endGame()
    }
    else {
      game.switchTurn();
    }
  }

})

function isPlayer2(){
  return $('#player2').val() !== ''
}

function getPlayer(name){
  return new Player(name)
}

function makeWeapon(string){
  return new Weapon(string)
}
