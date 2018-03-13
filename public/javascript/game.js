"use strict"

function Game(player1, player2 = new Computer()){
  var players = [player1, player2]
  var currentPlayer = players[0]
  var winner;
  var isTie;

   function switchCurrentPlayer(){
    currentPlayer = _otherPlayer(currentPlayer)
  }

   function getCurrentPlayer(){
    return currentPlayer
  }

   function getTieStatus(){
    return isTie;
  }

   function setResult(){
    var otherPlayer = _otherPlayer(currentPlayer)
    if (_isATie()) {
      isTie = true
    } else if (currentPlayer.getWeapon().isBetter(otherPlayer.getWeapon())) {
      winner = currentPlayer
    } else {
      winner = otherPlayer
    }
  }

   function getResult(){
    if (getTieStatus()) {
      return "It's a tie"
    } else {
      return _finalMessage()
    }
  }

   function isComplete(){
    return players.filter(player => {
      return player.getWeapon() !== undefined
    }).length === 2;
  }

   function _finalMessage(){
    var loser = _otherPlayer(winner)
    var winnerName = winner.getName();
    var winnerWeapon = winner.getWeapon().getType();
    var loserName = loser.getName()
    var loserWeapon = loser.getWeapon().getType()
    var verb = winner.getWeapon().getVerb(loser.getWeapon());
    return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
  }

   function _isATie(){
    var currentPlayerWeapon = currentPlayer.getWeapon().getType()
    var otherPlayerWeapon = _otherPlayer(currentPlayer).getWeapon().getType()
    return currentPlayerWeapon === otherPlayerWeapon
  }

    function _otherPlayer(originalPlayer){
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
    players: players,
    winner: winner
  }
}
