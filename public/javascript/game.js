"use strict"

function Game (player1, player2 = new Computer()){
  this._player1 = player1
  this._player2 = player2
  this._currentTurn = this._player1
}

Game.prototype.switchTurn = function(){
  if (this._currentTurn === this._player1) {
    this._currentTurn = this._player2
  } else {
    this._currentTurn = this._player1
  }
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

Game.prototype._finalMessage = function(){
  var winnerName = this._winner.getName();
  var winnerWeapon = this._winner._weapon.getType();
  var loserName = this._loser.getName()
  var loserWeapon = this._loser._weapon.getType()
  var verb = this._winner._weapon.getVerb(this._loser._weapon);
  return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
}
