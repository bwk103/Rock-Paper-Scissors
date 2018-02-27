function Weapon(type){
  this._rules = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  };
  this._type = type
}

Weapon.prototype.getType = function(){
  return this._type
}

Weapon.prototype.isBetter = function(weapon){
  return this._rules[this._type] === weapon._type
}
