"use strict"

function Game (player1, player2){
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
  } else {
    this._winner = this._player2
  }
}

Game.prototype.getResult = function(){
  if (this._isTie) {
    return 'tie'
  } else {
    return this._winner
  }
}
