"use strict"

var Game = (function(player1, player2 = new Computer()){
  var players = [player1, player2]
  var currentPlayer = players[0]
  var winner;
  var isTie;

  var switchCurrentPlayer = function(){
    currentPlayer = _otherPlayer(currentPlayer)
  }

  var getCurrentPlayer = function(){
    return currentPlayer
  }

  var getTieStatus = function(){
    return isTie;
  }

  var setResult = function(){
    var otherPlayer = _otherPlayer(currentPlayer)
    if (_isATie()) {
      isTie = true
    } else if (currentPlayer.getWeapon().isBetter(otherPlayer.getWeapon())) {
      winner = currentPlayer
    } else {
      winner = otherPlayer
    }
  }

  var getResult = function(){
    if (getTieStatus()) {
      return "It's a tie"
    } else {
      return _finalMessage()
    }
  }

  var isComplete = function(){
    return players.filter(player => {
      return player.getWeapon() !== undefined
    }).length === 2;
  }

  var _finalMessage = function(){
    var loser = _otherPlayer(winner)
    var winnerName = winner.getName();
    var winnerWeapon = winner.getWeapon().getType();
    var loserName = loser.getName()
    var loserWeapon = loser.getWeapon().getType()
    var verb = winner.getWeapon().getVerb(loser.getWeapon());
    return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
  }

  var _isATie = function(){
    var currentPlayerWeapon = currentPlayer.getWeapon().getType()
    var otherPlayerWeapon = _otherPlayer(currentPlayer).getWeapon().getType()
    return currentPlayerWeapon === otherPlayerWeapon
  }

  var _otherPlayer = function(originalPlayer){
    return players.filter(player => {
      return player !== originalPlayer
    })[0];
  }

  return {
    getCurrentPlayer: getCurrentPlayer,
    switchCurrentPlayer: switchCurrentPlayer,
    setResult: setResult,
    getResult: getResult,
    isComplete: isComplete,
    isTie: isTie,
    getTieStatus,
    players: players
  }
})
