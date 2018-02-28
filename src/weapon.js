"use strict";

function Weapon(type){
  this._rules = {
    'rock': [
              { name: 'scissors', verb: 'crushes' },
              { name: 'lizard', verb: 'crushes' }
            ],
    'paper': [
              { name: 'rock', verb: 'covers' },
              { name: 'spock', verb: 'disproves' }
             ],
    'scissors': [
                  { name: 'paper', verb: 'cuts' },
                  { name: 'lizard', verb: 'decapitates' },
                ],
    'lizard': [
                  { name: 'spock', verb: 'poisons' },
                  { name: 'paper', verb: 'eats' }
              ],
    'spock': [
                  { name: 'scissors', verb: 'smashes' },
                  { name: 'rock', verb: 'vapourises' }
              ]
  };
  this._type = type
}

Weapon.prototype.getType = function(){
  return this._type
}

Weapon.prototype.isBetter = function(weapon){
  var array = [];
  this._rules[this._type].forEach(function(item){
    array.push(item.name)
  })
  return array.includes(weapon._type)
}

Weapon.prototype.getVerb = function(losing_weapon){
  var verb;
    this._rules[this._type].forEach(function(item){
      if (item.name === losing_weapon.getType()){
        verb = item.verb
      }
    })
    return verb
}
