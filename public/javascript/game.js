"use strict"

function Game (player1, player2 = new Computer()){
  this._players = [player1, player2]
  this._player1 = player1
  this._player2 = player2
  this._currentPlayer = this._player1
}

Game.prototype.switchPlayer = function(){
  this._currentPlayer = this._players.filter(player => {
    return player !== this._currentPlayer
  })[0];
}

Game.prototype.setResult = function(){
  if (this._player1._weapon.getType() === this._player2._weapon.getType()) {
    this._isTie = true
  } else if (this._player1._weapon.isBetter(this._player2._weapon)) {
    this._winner = this._player1
    this._loser = this._player2
  } else {
    this._winner = this._player2
    this._loser = this._player1
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
  return this._player1._weapon !== undefined && this._player2._weapon !== undefined
}

Game.prototype._finalMessage = function(){
  var winnerName = this._winner.getName();
  var winnerWeapon = this._winner._weapon.getType();
  var loserName = this._loser.getName()
  var loserWeapon = this._loser._weapon.getType()
  var verb = this._winner._weapon.getVerb(this._loser._weapon);
  return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
}
