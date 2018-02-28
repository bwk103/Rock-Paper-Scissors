"use strict";

function Weapon(type){
  this._rules = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['spock', 'paper'],
    'spock': ['scissors', 'rock']
  };
  this._type = type
}

Weapon.prototype.getType = function(){
  return this._type
}

Weapon.prototype.isBetter = function(weapon){
  return this._rules[this._type].includes(weapon._type)
}
