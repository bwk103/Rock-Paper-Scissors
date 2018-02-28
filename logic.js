$(document).ready(function(){
  var game;

  $('#play').on('click', function(e){
    e.preventDefault()
    var player1 = getPlayer($('#player1').val())
    game = new Game(player1)
  })

  $('button.weapon').on('click', function(e){
    e.preventDefault();
    var weapon = makeWeapon($(this).attr('data-weapon'))
    game._player1.setWeapon(weapon)
    endGame()
  })

  function endGame(){
    game.setResult()
    $('#result-message').text(game.getResult())
  }

  $('#replay').on('click', function(){
    game = new Game(getPlayer($('#player1').val()))
    $('#result-message').text('')
  })

})

function getPlayer(name){
  return new Player(name)
}

function makeWeapon(string){
  return new Weapon(string)
}
