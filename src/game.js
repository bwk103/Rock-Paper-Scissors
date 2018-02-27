function Game (player1, player2){
  this._player1 = player1;
  this._player2 = player2;
  this._currentTurn = this._player1;
}

Game.prototype.switchTurn = function(){
  if (this._currentTurn === this._player1) {
    return this._currentTurn = this._player2;
  } else {
    return this._currentTurn = this._player1;
  }
}
