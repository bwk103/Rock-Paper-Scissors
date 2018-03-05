"use strict"

function Game (player1, player2 = new Computer()){
  this._players = [player1, player2]
  this._currentPlayer = this._players[0]
}

Game.prototype.switchCurrentPlayer = function(){
  this._currentPlayer = this._otherPlayer(this._currentPlayer)
}

Game.prototype.setResult = function(){
  var otherPlayer = this._otherPlayer(this._currentPlayer)
  if (this._isATie()) {
    this._isTie = true
  } else if (this._currentPlayer._weapon.isBetter(otherPlayer._weapon)) {
    this._winner = this._currentPlayer
  } else {
    this._winner = otherPlayer
  }
}

Game.prototype.getResult = function(){
  if (this._isTie) {
    return "It's a tie"
  } else {
    return this._finalMessage()
  }
}

Game.prototype.isComplete = function(){
  return this._players.filter(player => {
    return player._weapon !== undefined
  }).length === 2;
}

Game.prototype._isATie = function(){
  var currentPlayerWeapon = this._currentPlayer._weapon.getType()
  var otherPlayerWeapon = this._otherPlayer(this._currentPlayer)._weapon.getType()
  return currentPlayerWeapon === otherPlayerWeapon
}

Game.prototype._otherPlayer = function(originalPlayer){
  return this._players.filter(player => {
    return player !== originalPlayer
  })[0];
}

Game.prototype._finalMessage = function(){
  var loser = this._otherPlayer(this._winner)
  var winnerName = this._winner.getName();
  var winnerWeapon = this._winner._weapon.getType();
  var loserName = loser.getName()
  var loserWeapon = loser._weapon.getType()
  var verb = this._winner._weapon.getVerb(loser._weapon);
  return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
}
