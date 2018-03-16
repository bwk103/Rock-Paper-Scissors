"use strict";

$(document).ready(function(){
  var game;
  var results = ResultsViewer($("#result-message"));
  var interaction = Interaction()

  $('#play').on('click', function(e){
    e.preventDefault()
    $('.player-details').addClass('hide')
    game = interaction.startGame($('#player1').val(), $('#player2').val())
  })

  $('button.weapon').on('click', function(e){
    e.preventDefault();
    interaction.takeTurn(game.getCurrentPlayer(), $(this).attr('data-weapon'))
    interaction.isGameOver(game, results)
  })

  $('#replay').on('click', function(){
    game = interaction.startGame($('#player1').val(), $('#player2').val())
    results.clearMessage()
    $('#replay').toggleClass('hide')
  })
})
