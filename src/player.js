function Player(name){
  this._name = name
}

Player.prototype.getName = function(){
  return this.name
}

Player.prototype.setWeapon = function(weapon){
  this.weapon = weapon
}

Player.prototype.getWeapon = function(){
  return this.weapon
}
