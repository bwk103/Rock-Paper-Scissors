"use strict";

function Computer(){
  this._name = 'Computer'
  this._weapon = new Weapon(this._setWeapon())
}

Computer.prototype.getName = function() {
  return this._name
}

Computer.prototype.getWeapon = function() {
  return this._weapon
}

Computer.prototype._setWeapon = function(){
  const weapons = ['rock', 'paper', 'scissors', 'spock', 'lizard']
  return weapons[Math.floor(Math.random()*weapons.length)]
}
