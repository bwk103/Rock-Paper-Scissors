"use strict"

function Game(player1, player2 = new Computer()){
  var players = [player1, player2]
  var currentPlayer = players[0]
  var result;
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
      result = { winner: currentPlayer, loser: otherPlayer }
    } else {
      result = { winner: otherPlayer, loser: currentPlayer }
    }
  }

   function getResult(){
    return result
  }

   function isComplete(){
    return players.filter(player => {
      return player.getWeapon() !== undefined
    }).length === 2;
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
    getTieStatus: getTieStatus,
    players: players
  }
}
