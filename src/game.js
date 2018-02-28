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

Game.prototype.setResult = function(){
  if (this._isTied()) {
    this._isTie = true
  }
  if (this._players[0].weapon.isBetter(this._players[1])){
    this._winner = this._players[0]
  } else {
    this._winner = this._players[1]
  }
}

Game.prototype.getResult = function(){
  return this._winner
}

Game.prototype._isTied = function(){
  return this._players.reduce((a, b) => {
    return a.type === b.type
  });
}
