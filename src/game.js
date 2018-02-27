function Game (player1, player2){
  this._players = [player1, player2]
  this._currentTurn = this._players[0]
}

Game.prototype.switchTurn = function(){
  if (this._players.indexOf(this._currentTurn) === 0) {
    this._currentTurn = this._players[1]
  } else {
    this._currentTurn = this._players[0]
  }
}
