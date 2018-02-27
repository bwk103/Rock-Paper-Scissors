function Player(name){
  this._name = name
}

Player.prototype.getName = function(){
  return this._name
}

Player.prototype.setWeapon = function(weapon){
  this._weapon = weapon
}

Player.prototype.getWeapon = function(){
  return this._weapon
}
